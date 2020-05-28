import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ViewService} from "../../services/view.service";
import {OrganigramViewModel} from "../models";
import {LoadingAndErrorHandling} from "../../../../LoadingAndErrorHandling";
import {AuthenticationService} from "../../../../services/authentication.service";

@Component({
	selector: 'app-organigram-wrapper',
	templateUrl: './organigram-wrapper.component.html',
	styleUrls: ['./organigram-wrapper.component.scss']
})
export class OrganigramWrapperComponent extends LoadingAndErrorHandling implements OnInit {

	id: string = "";

	currentView: OrganigramViewModel;

	constructor(private route: ActivatedRoute, private viewService: ViewService, public authService: AuthenticationService) {
		super();

		this.currentView = null;
	}

	ngOnInit(): void {
		this.loading = true;

		this.route.paramMap.subscribe(async (next) => {
			if (next.has("id")) {
				this.id = next.get("id");

				const existing: boolean = await this.viewExists(this.id);
				const permission: boolean = await this.viewIsAllowedToSee(this.id);

				if (existing && permission) {
					this.hasError = false;
					this.loading = false;

					this.currentView = this.viewService.getView(this.id);
				}
				else {
					this.handleError(new Error("This organigram does not exist or you don't have permission to see it!"));
				}
			}
			else {
				this.loading = false;
			}
		}, error => {
			this.handleError(error);
		});
	}

	private async viewExists(id: string): Promise<boolean> {
		return this.viewService.viewExists(id);
	}

	private async viewIsAllowedToSee(id: string): Promise<boolean> {
		return await this.viewService.viewIsAllowedToSee(id);
	}

	createNew() {
		this.loading = true;

		this.viewService.createView()
			.then(r => {
				r.subscribe(next => {
					this.currentView = next;
					this.loading = false;
					this.id = this.currentView.uid;


				});
			})
			.catch(error => {
				this.handleError(error);
			});
	}
}
