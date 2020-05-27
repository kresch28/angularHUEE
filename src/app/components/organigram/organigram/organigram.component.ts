import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {OrganigramViewModel, OrganigramViewVisibility} from "../models";
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
	selector: 'app-organigram',
	templateUrl: './organigram.component.html',
	styleUrls: ['./organigram.component.scss']
})
export class OrganigramComponent implements OnInit {
	currentView: OrganigramViewModel;
	error: any;
	isLoading: boolean = false;
	hasError: boolean = false;

	constructor(public usersService: UserService, public authService: AuthenticationService) {
	}

	ngOnInit(): void {
		this.isLoading = true;

		if (this.authService.isLoggedIn)
		{
			if (this.currentView == null) {
				this.currentView = {
					title: "New View",
					users: [],
					owner: null,
					createdAt: new Date(),
					updatedAt: new Date(),
					visibility: OrganigramViewVisibility.Private
				};
			}

			this.usersService.allUsers$.subscribe((users) => {
				console.log(users);
				this.currentView.users = this.usersService.allUsersAsOrganigramViewUser
			}, error => {
				this.handleError(error);
			});
		}
		else
		{
			this.handleError(new Error("You must be logged in to create an own organigram!"))
		}

		this.isLoading = false;
	}

	private handleError(error): void {
		this.error = error;
		this.hasError = true;
	}
}
