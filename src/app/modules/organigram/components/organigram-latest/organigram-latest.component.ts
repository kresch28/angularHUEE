import {Component, OnInit} from '@angular/core';
import {ViewService} from "../../services/view.service";
import {AuthenticationService} from "../../../../services/authentication.service";
import {OrganigramViewModel} from "../models";
import {LoadingAndErrorHandling} from "../../../../LoadingAndErrorHandling";

@Component({
	selector: 'app-organigram-latest',
	templateUrl: './organigram-latest.component.html',
	styleUrls: ['./organigram-latest.component.scss']
})
export class OrganigramLatestComponent extends LoadingAndErrorHandling implements OnInit {
	private allOwnedViews: OrganigramViewModel[] = [];

	private numberOfViewsShown: number = 5;
	shownViews: OrganigramViewModel[] = [];


	constructor(private viewService: ViewService, private authService: AuthenticationService) {
		super();
	}

	ngOnInit(): void {
		this.loading = true;

		if (this.authService.isLoggedIn) {
			
			this.allOwnedViews = this.viewService.getViewsOfOwner(this.authService.getUser().uid);
			this.viewService.getViewsOfOwner$(this.authService.getUser().uid).subscribe(next => {
					this.allOwnedViews = next;
					this.updateShownViews();
				},
				error => this.handleError(error));
			
			this.loading = false;
		}

		this.authService.loggedInUser$.subscribe(user => {
				if (user != null) {
					this.viewService.getViewsOfOwner$(user.uid).subscribe(next => {
							this.allOwnedViews = next;
							this.updateShownViews();
						},
						error => this.handleError(error));
				}
				else {
					this.handleError(new Error("There was a problem while loading your latest edited organigrams."))
				}
			},
			error => this.handleError(error));
	}

	updateShownViews() {
		this.allOwnedViews.sort((a, b) => a.updatedAt < b.updatedAt ? 1 : -1);
		this.shownViews = this.allOwnedViews.slice(0, this.numberOfViewsShown);

		this.loading = false;
	}

	deleteView(uid: string) {
		this.loading = true;
		this.viewService.deleteView(uid)
			.then(() => this.updateShownViews())
			.catch(error => this.handleError(error));
	}
}
