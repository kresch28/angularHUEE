import {KeyValue} from "@angular/common";
import {User} from "firebase";

export enum OrganigramViewVisibility {
	Private,
	Unlisted,
	Public
}

export interface OrganigramViewModel {
	title: string,
	users: OrganigramViewUserModel[],
	owner: User,
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
	parents: OrganigramUserModel[] | null,
	children: OrganigramUserModel[] | null,
	additionalFields: KeyValue<string, string>[]
}
