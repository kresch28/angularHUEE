import {Component, Input} from '@angular/core';
import {CdkDragMove} from "@angular/cdk/drag-drop";
import {OrganigramViewUserModel} from "../models";
import {UserService} from "../../services/user.service";

@Component({
	selector: 'app-organigram-item',
	templateUrl: './organigram-item.component.html',
	styleUrls: ['./organigram-item.component.scss']
})
export class OrganigramItemComponent {
	user: OrganigramViewUserModel;
	@Input() userUid: string;
	@Input() preview: boolean = false;

	constructor(private usersService: UserService) {
		this.user = this.usersService.userAsOrganigramViewUser(this.usersService.getByUid(this.userUid));
	}

	itemMoved(event: CdkDragMove) {
		if (event.delta.x != 0 && event.delta.y != null) {
			event.pointerPosition;
			console.log(event.pointerPosition);
		}
	}
}
