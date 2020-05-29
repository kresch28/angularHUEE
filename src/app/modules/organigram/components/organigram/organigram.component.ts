import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrganigramItemMovedEvent, OrganigramViewModel, OrganigramViewPosition, OrganigramViewVisibility} from "../models";
import {AuthenticationService} from "../../../../services/authentication.service";
import {ViewService} from "../../services/view.service";
import {UserService} from "../../services/user.service";
import {CdkDragEnd} from "@angular/cdk/drag-drop";

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
	
	drawingLines: boolean = false;

	visibilities = {"Private": OrganigramViewVisibility.Private, "Unlisted": OrganigramViewVisibility.Unlisted, "Public": OrganigramViewVisibility.Public};

	constructor(private authService: AuthenticationService, private viewService: ViewService, private usersService: UserService) {
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
		
		this.drawLines();

		this.currentView.updatedAt = new Date();
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
	
	toggleDrawing() {
		this.drawingLines = !this.drawingLines;
		
		this.drawLines();
	}
	
	itemDropped(event: CdkDragEnd) {
		// TODO: implement logic, that you set the dropped element as child of the element it was dropped on
	}

	drawLines() {
		if (this.currentView && this.drawingLines) {
			const itemWidth: number = 200;
			const itemHeight: number = 200;
			
			const lineContainer = document.getElementById("linesContainer");
			
			// clear lines
			lineContainer.childNodes.forEach(node => lineContainer.removeChild(node));

			let boundsBounds: DOMRect = document.getElementById("organigram-bounds").getBoundingClientRect();

			this.currentView.usedUsersInformation.forEach(item => {
				item.childrenUid.forEach(child => {
					const childPosition: OrganigramViewPosition =
						this.usersService.getViewInformationForUser(this.usersService.getByUid(child)).position;

					const from1: OrganigramViewPosition = {
						x: boundsBounds.x + boundsBounds.width / 2 + item.position.x,
						y: boundsBounds.y + item.position.y + window.pageYOffset + itemHeight
					}
					const to1: OrganigramViewPosition = {
						x: boundsBounds.x + boundsBounds.width / 2 + item.position.x,
						y: boundsBounds.y + childPosition.y + window.pageYOffset + itemHeight + 50
					}

					const from2: OrganigramViewPosition = {
						x: boundsBounds.x + boundsBounds.width / 2 + item.position.x,
						y: boundsBounds.y + item.position.y + window.pageYOffset + itemHeight + 50
					}
					const to2: OrganigramViewPosition = {
						x: boundsBounds.x + boundsBounds.width / 2 + childPosition.x,
						y: boundsBounds.y + childPosition.y + window.pageYOffset + itemHeight - 50
					}

					const from3: OrganigramViewPosition = {
						x: boundsBounds.x + boundsBounds.width / 2 + childPosition.x,
						y: boundsBounds.y + item.position.y + window.pageYOffset + itemHeight - 50
					}
					const to3: OrganigramViewPosition = {
						x: boundsBounds.x + boundsBounds.width / 2 + childPosition.x,
						y: boundsBounds.y + childPosition.y + window.pageYOffset + itemHeight
					}

					lineContainer.appendChild(this.createLineElement(from1, to1));
					lineContainer.appendChild(this.createLineElement(from2, to2));
					lineContainer.appendChild(this.createLineElement(from3, to3));
				})
			});
		}
	}

	createLineElement(from: OrganigramViewPosition, to: OrganigramViewPosition) {
		let line = document.createElement("div");
		const styles = 'border-top: 1px solid black; '
			+ 'border-left: 1px solid black; '
			+ 'width: ' + (to.x - from.x) + 'px; '
			+ 'height: ' + (to.y - from.y) + 'px; '
			+ 'position: absolute; '
			+ 'top: ' + from.y + 'px; '
			+ 'left: ' + from.x + 'px; ';
		line.setAttribute('style', styles);
		return line;
	}
}
