import {Component} from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {

	printUser(event) {
		console.log("Logged in user successfully", event);
	}

	printError(event) {
		console.error("Logged in unsuccessful", event);
	}
}
