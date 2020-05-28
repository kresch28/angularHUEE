import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CdkDragEnd} from "@angular/cdk/drag-drop";
import {OrganigramItemMovedEvent, OrganigramUserModel, OrganigramViewPosition, OrganigramViewUserInformation} from "../models";
import {UserService} from "../../services/user.service";
import {LoadingAndErrorHandling} from "../../../../LoadingAndErrorHandling";
import {Subject} from "rxjs";
import {throttleTime} from "rxjs/operators";

@Component({
	selector: 'app-organigram-item',
	templateUrl: './organigram-item.component.html',
	styleUrls: ['./organigram-item.component.scss']
})
export class OrganigramItemComponent extends LoadingAndErrorHandling implements OnInit {
	user: OrganigramUserModel;
	private position$: Subject<OrganigramViewPosition> = new Subject<OrganigramViewPosition>();
	private lastPosition: OrganigramViewPosition;

	@Input() userInformation: OrganigramViewUserInformation;

	@Output() moved: EventEmitter<OrganigramItemMovedEvent> = new EventEmitter<OrganigramItemMovedEvent>();

	constructor(private usersService: UserService) {
		super();
	}

	ngOnInit(): void {
		this.loading = true;

		this.user = this.usersService.getByUid(this.userInformation.uid);

		if (this.user == null) {
			this.handleError(new Error("Could not load user"));
		}
		else {
			this.position$
				.pipe(throttleTime(1000)) // only let new position values emit an event every second at most
				.subscribe(next => {
					this.moved.emit({senderUid: this.userInformation.uid, newPosition: next})
				});
			this.lastPosition = this.userInformation.position;
		}
	}

	itemDropped(event: CdkDragEnd) {
		this.lastPosition = {x: this.lastPosition.x + event.distance.x, y: this.lastPosition.y + event.distance.y};
		this.position$.next(this.lastPosition);
	}
}
