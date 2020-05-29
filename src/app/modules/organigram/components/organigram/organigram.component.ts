import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrganigramItemMovedEvent, OrganigramViewModel, OrganigramViewVisibility} from "../models";
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

	hasWarning: boolean = false;
	warning: string = "";

	private titleBefore: string;

	visibilities = {"Private": OrganigramViewVisibility.Private, "Unlisted": OrganigramViewVisibility.Unlisted, "Public": OrganigramViewVisibility.Public};

	constructor(private authService: AuthenticationService, private viewService: ViewService) {
	}

	ngOnInit(): void {
		if (!this.authService.isLoggedIn || this.currentView == null) {
			this.error.emit(new Error("Something went wrong! You should not even be able to be here!"));
		}
	}

	itemMoved(event: OrganigramItemMovedEvent) {
		if (this.isOwner) {
			this.currentView.usedUsersInformation.forEach(userInformation => {
				if (userInformation.uid == event.senderUid) {
					userInformation.position = event.newPosition;
				}
			});

			this.update();
		}
		else {
			this.hasWarning = true;
			this.warning = "Since you are not the owner of this view, your changes will not be saved!";
		}
	}

	update() {
		this.stopEditTitle();

		this.viewService.updateView(this.currentView);
		this.titleBefore = this.currentView.title;
	}

	stopEditTitle(discardChanges = false) {
		this.editingTitle = false;

		if (discardChanges) {
			this.currentView.title = this.titleBefore;
		}
	}

	startEditTitle() {
		if (this.isOwner) {
			this.titleBefore = this.currentView.title;
			this.editingTitle = true;
		}
	}

	get isOwner() {
		return this.authService.getUser().uid == this.currentView.ownerUid;
	}
}
