import {KeyValue} from "@angular/common";

export enum OrganigramViewVisibility {
	Private,
	Unlisted,
	Public
}

export interface OrganigramViewModel {
	uid: string,
	title: string,
	usedUsersInformation: OrganigramViewUserInformation[],
	ownerUid: string,
	visibility: OrganigramViewVisibility,
	createdAt: Date,
	updatedAt: Date,
}

export interface OrganigramUserModel {
	uid: string,
	displayName: string | null,
	email: string,
	phoneNumber: string | null,
	photoURL: string | null,
	providerId: string,
}

export interface OrganigramViewUserInformation {
	uid: string,
	position: OrganigramViewPosition,
	parentsUid: string[],
	childrenUid: string[],
	additionalFields: KeyValue<string, string>[]
}

export interface OrganigramViewPosition {
	x: number,
	y: number
}

export interface OrganigramItemMovedEvent {
	senderUid: string,
	newPosition: OrganigramViewPosition
}
