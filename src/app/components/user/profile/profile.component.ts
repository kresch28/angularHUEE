import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from "../../../services/authentication.service";
import {User} from "firebase";

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
	user: User;

	loading: boolean = false;
	hasError: boolean = false;
	error: Error | null = null;

	constructor(private router: Router, private authenticationService: AuthenticationService) {
	}

	ngOnInit(): void {
		this.loading = true;
		this.hasError = false;
		
		this.user = this.authenticationService.getUser();

		this.authenticationService.loggedInUser$.subscribe(next => {
			this.user = next;
		}, error => {
			this.error = error;
			this.hasError = true;
		});
		
		this.loading = false;
	}
}
