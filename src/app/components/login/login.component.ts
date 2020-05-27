import {Component, Input} from '@angular/core';
import {AuthProvider} from "ngx-auth-firebaseui";
import {Router} from "@angular/router";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	@Input() redirect: string = "";

	providers: AuthProvider[];

	constructor(private router: Router) {
		this.providers = [AuthProvider.ANONYMOUS, AuthProvider.EmailAndPassword, AuthProvider.Google];
	}

	loggedInSuccessful(event) {
		this.router.navigate([this.redirect]);
	}
}
