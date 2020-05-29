import {Component, OnInit} from '@angular/core';
import {LoadingAndErrorHandling} from "../../../../LoadingAndErrorHandling";
import {OrganigramViewModel} from "../models";
import {ViewService} from "../../services/view.service";

@Component({
	selector: 'app-organigram-public-overview',
	templateUrl: './organigram-public-overview.component.html',
	styleUrls: ['./organigram-public-overview.component.scss']
})
export class OrganigramPublicOverviewComponent extends LoadingAndErrorHandling implements OnInit {
	private numberOfViewsShown: number = 5;
	shownViews: OrganigramViewModel[] = [];


	constructor(private viewService: ViewService) {
		super();
	}

	ngOnInit(): void {
		this.loading = true;

		this.shownViews = this.viewService.getPublicViews(this.numberOfViewsShown);

		this.getViews();

		this.loading = false;
	}

	private getViews() {
		this.viewService.getPublicViews$().subscribe(() => {
				this.shownViews = this.viewService.getPublicViews(this.numberOfViewsShown);
			},
			error => this.handleError(error));

		this.loading = false;
	}
}
