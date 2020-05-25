import {Component, Input} from '@angular/core';
import {CdkDragDrop, CdkDragEnd} from "@angular/cdk/drag-drop";
import {element} from "protractor";

export interface OrganigramUserModel {
	uid: string,
	displayName: string | null,
	role: string | null,
	email: string,
	phoneNumber: string | null,
	photoUrl: string | null,
	providerId: string,
}

@Component({
	selector: 'app-organigram-item',
	templateUrl: './organigram-item.component.html',
	styleUrls: ['./organigram-item.component.scss']
})
export class OrganigramItemComponent {
	@Input() user: OrganigramUserModel;
	
	constructor() {
		
	}

	itemDropped(event: CdkDragEnd)
	{
		console.log(event);
		console.log(event.source.moved.subscribe((next) => {
			console.log(next.pointerPosition);
		}));
	}
}
