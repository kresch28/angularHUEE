import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrganigramItemMovedEvent, OrganigramViewModel} from "../models";
import {AuthenticationService} from "../../../../services/authentication.service";
import {ViewService} from "../../services/view.service";

@Component({
	selector: 'app-organigram',
	templateUrl: './organigram.component.html',
	styleUrls: ['./organigram.component.scss']
})
export class OrganigramComponent implements OnInit {
	@Input() currentView: OrganigramViewModel;
	@Output() error: EventEmitter<Error> = new EventEmitter<Error>();

	editingTitle: boolean = false;

	constructor(private authService: AuthenticationService, private viewService: ViewService) {
	}

	ngOnInit(): void {
		if (!this.authService.isLoggedIn || this.currentView == null) {
			this.error.emit(new Error("Something went wrong! You should not even be able to be here!"));
		}
	}

	itemMoved(event: OrganigramItemMovedEvent) {
		this.currentView.usedUsersInformation.forEach(userInformation => {
			if (userInformation.uid == event.senderUid) {
				userInformation.position = event.newPosition;
			}
		});
		
		this.update();
	}

	update() {
		this.stopEditTitle();

		this.viewService.updateView(this.currentView);
	}

	stopEditTitle() {
		this.editingTitle = false;
	}

	startEditTitle() {
		this.editingTitle = true;
	}
}
