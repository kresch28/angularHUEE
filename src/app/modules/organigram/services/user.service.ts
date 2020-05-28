import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {OrganigramUserModel, OrganigramViewUserModel} from "../components/models";


@Injectable({
	providedIn: 'root'
})
export class UserService {
	private users: OrganigramUserModel[] = [];
	private usersSubject$ = new Subject<OrganigramUserModel[]>();
	public firestoreReference: AngularFirestoreCollection<OrganigramUserModel>;

	constructor(private firestore: AngularFirestore) {
		this.firestoreReference = firestore.collection<OrganigramUserModel>('users');
		this.firestoreReference.valueChanges()
			.subscribe(value => {
				this.users = value;
				this.usersSubject$.next(this.users);
			}, error => {
				this.usersSubject$.error(error);
			});
	}

	get allUsers$() {
		return (this.usersSubject$.hasError) ? this.usersSubject$.thrownError : this.usersSubject$.asObservable();
	}

	get allUsersAsOrganigramViewUser(): OrganigramViewUserModel[] {
		let convertedUsers: OrganigramViewUserModel[] = [];

		this.users.forEach(user => {
			convertedUsers = [...convertedUsers, this.userAsOrganigramViewUser(user)];
		})

		return convertedUsers;
	}

	get allUsersUids(): string[] {
		let uids: string[] = [];

		this.users.forEach(user => uids = [...uids, user.uid]);

		return uids;
	}

	userAsOrganigramViewUser(user: OrganigramUserModel): OrganigramViewUserModel {
		if (user == null) {
			return null;
		}

		return {...user, position: {x: 0, y: 0}, parentsUid: [], childrenUid: [], additionalFields: []};
	}

	remove(uid: string) {
		this.firestoreReference.doc(uid).delete();
	}

	getByUid(uid: string): OrganigramUserModel {
		this.users.forEach(user => {
			if (user.uid == uid) {
				console.log("Found user: ", user);
				return user;
			}
		});

		return null;
	}
}
