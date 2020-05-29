import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ViewService} from "../../services/view.service";
import {AuthenticationService} from "../../../../services/authentication.service";
import {OrganigramViewModel} from "../models";
import {LoadingAndErrorHandling} from "../../../../LoadingAndErrorHandling";
import {User} from "firebase";

@Component({
	selector: 'app-organigram-latest',
	templateUrl: './organigram-latest.component.html',
	styleUrls: ['./organigram-latest.component.scss']
})
export class OrganigramLatestComponent extends LoadingAndErrorHandling implements OnInit {
	private allOwnedViews: OrganigramViewModel[] = [];

	private numberOfViewsShown: number = 5;
	shownViews: OrganigramViewModel[] = [];

	@Output() deleteItem: EventEmitter<string> = new EventEmitter<string>();


	constructor(private viewService: ViewService, public authService: AuthenticationService) {
		super();
	}

	ngOnInit(): void {
		this.loading = true;

		if (this.authService.isLoggedIn) {
			this.allOwnedViews = this.viewService.getViewsOfOwner(this.authService.getUser().uid);
			this.updateShownViews();

			this.getViews(this.authService.getUser());
		}

		this.authService.loggedInUser$.subscribe(
			user => this.getViews(user),
			error => this.handleError(error));
	}

	private getViews(user: User) {
		if (user != null) {
			this.viewService.getViewsOfOwner$(user.uid).subscribe(next => {
					this.allOwnedViews = next;
					this.updateShownViews();
				},
				error => this.handleError(error));

			this.loading = false;
		}
		else {
			this.handleError(new Error("There was a problem while loading your latest edited organigrams."))
		}
	}

	updateShownViews() {
		this.allOwnedViews.sort((a, b) => a.updatedAt < b.updatedAt ? 1 : -1);
		this.shownViews = this.allOwnedViews.slice(0, this.numberOfViewsShown);

		this.loading = false;
	}

	deleteView(uid: string) {
		this.deleteItem.emit(uid);
	}
}
