import {Component} from '@angular/core';
import {AuthorisationService} from '../../services/authorisation.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {

	constructor(public authService: AuthorisationService) {
	}

	printUser(event) {
		console.log("Logged in user successfully", event);
		console.log(this.authService.firestoreReference);
	}

	printError(event) {
		console.error("Logged in unsuccessful", event);
	}
}
