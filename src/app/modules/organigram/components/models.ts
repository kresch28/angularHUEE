import {KeyValue} from "@angular/common";

export enum OrganigramViewVisibility {
	Private,
	Unlisted,
	Public
}

export interface OrganigramViewModel {
	uid: string,
	title: string,
	usedUsersUid: string[],
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

export interface OrganigramViewUserModel extends OrganigramUserModel {
	position: { x: number, y: number },
	parentsUid: string[],
	childrenUid: string[],
	additionalFields: KeyValue<string, string>[]
}
