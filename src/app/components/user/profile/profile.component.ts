import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from "../../../services/authentication.service";
import {User} from "firebase";
import {LoadingAndErrorHandling} from "../../../LoadingAndErrorHandling";

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends LoadingAndErrorHandling implements OnInit {
	user: User;

	constructor(private router: Router, private authenticationService: AuthenticationService) {
		super();
	}

	ngOnInit(): void {
		this.loading = true;
		this.hasError = false;

		this.user = this.authenticationService.getUser();

		this.authenticationService.loggedInUser$.subscribe(
			next => this.user = next,
			error => this.handleError(error));

		this.loading = false;
	}
}
