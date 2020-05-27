import {Component, Input} from '@angular/core';
import {CdkDragMove} from "@angular/cdk/drag-drop";
import {OrganigramViewUserModel} from "../models";

@Component({
	selector: 'app-organigram-item',
	templateUrl: './organigram-item.component.html',
	styleUrls: ['./organigram-item.component.scss']
})
export class OrganigramItemComponent {
	@Input() user: OrganigramViewUserModel;

	constructor() {
	}

	itemMoved(event: CdkDragMove) {
		if (event.delta.x != 0 && event.delta.y != null) {
			event.pointerPosition;
		}
	}
}
