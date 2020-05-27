import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from "../../services/user.service";
import {OrganigramViewModel} from "../models";
import {AuthenticationService} from "../../../../services/authentication.service";

@Component({
	selector: 'app-organigram',
	templateUrl: './organigram.component.html',
	styleUrls: ['./organigram.component.scss']
})
export class OrganigramComponent implements OnInit {
	@Input() currentView: OrganigramViewModel;
	@Output() error: EventEmitter<Error> = new EventEmitter<Error>();

	constructor(public usersService: UserService, public authService: AuthenticationService) {
	}

	ngOnInit(): void {
		if (!this.authService.isLoggedIn || this.currentView == null) {
			this.error.emit(new Error("Something went wrong! You should not even be able to be here!"));
		}
	}
}
