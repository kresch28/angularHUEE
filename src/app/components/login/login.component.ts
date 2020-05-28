import {Component, Input} from '@angular/core';
import {AuthProvider} from "ngx-auth-firebaseui";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	@Input() redirect: string = "";

	private redirectViaParam: string = "";

	providers: AuthProvider[];

	constructor(private router: Router, private activatedRoute: ActivatedRoute) {
		this.providers = [AuthProvider.ANONYMOUS, AuthProvider.EmailAndPassword, AuthProvider.Google];

		activatedRoute.paramMap.subscribe(next => {
			if (next.has("redirectUrl")) {
				this.redirectViaParam = next.get("redirectUrl"); // TODO: get this working
			}
		})
	}

	loggedInSuccessful(event) {
		if (this.redirect == "" && this.redirectViaParam != "") {
			this.router.navigate([this.redirectViaParam]);
		}

		this.router.navigate([this.redirect]);
	}
}
