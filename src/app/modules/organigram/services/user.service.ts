import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {OrganigramUserModel, OrganigramViewUserInformation} from "../components/models";
import {AuthProvider} from "ngx-auth-firebaseui";


@Injectable({
	providedIn: 'root'
})
export class UserService {
	private users: OrganigramUserModel[] = [];
	private usersSubject$ = new Subject<OrganigramUserModel[]>();
	public firestoreReference: AngularFirestoreCollection<OrganigramUserModel>;

	private singleUser: OrganigramUserModel = null;
	private singleUserSubject$ = new Subject<OrganigramUserModel>();
	private singleUserUid: string = "";

	constructor(private firestore: AngularFirestore) {
		this.firestoreReference = firestore.collection<OrganigramUserModel>('users');
		this.firestoreReference.valueChanges()
			.subscribe(value => {
					this.users = value;
					this.usersSubject$.next(this.users);
				},
				error => this.usersSubject$.error(error));

		this.usersSubject$.subscribe(next => {
			this.singleUser = this.getByUidInternal(this.singleUserUid);
			this.singleUserSubject$.next(this.singleUser);

			if (this.singleUser == null) {
				this.singleUserSubject$.error(new Error("Could not find user"));
			}
		});
	}

	get allUsers$() {
		return this.usersSubject$.asObservable();
	}

	get getViewInformationForAllUsers(): OrganigramViewUserInformation[] {
		let convertedUsers: OrganigramViewUserInformation[] = [];

		this.users.forEach(user => {
			// get all users, but filter out anonymous users (they get created by clicking continue as guest in registration)
			if (user.providerId != null && user.providerId != "") {
				convertedUsers = [...convertedUsers, this.getViewInformationForUser(user)];
			}
		});

		return convertedUsers;
	}

	get allUsersUids(): string[] {
		let uids: string[] = [];

		this.users.forEach(user => uids = [...uids, user.uid]);

		return uids;
	}

	getViewInformationForUser(user: OrganigramUserModel): OrganigramViewUserInformation {
		if (user == null) {
			return null;
		}

		return { uid: user.uid , position: {x: 0, y: 0}, parentsUid: [], childrenUid: [], additionalFields: []};
	}

	remove(uid: string) {
		this.firestoreReference.doc(uid).delete();
	}

	getByUid$(uid: string): Observable<OrganigramUserModel> {
		this.getByUid(uid);
		return this.singleUserSubject$.asObservable();
	}

	getByUid(uid: string): OrganigramUserModel {
		if (!!uid && this.singleUserUid != uid) {
			this.singleUser = this.getByUidInternal(uid);
			this.singleUserSubject$.next(this.singleUser);

			if (this.singleUser == null) {
				this.singleUserSubject$.error(new Error("Could not find user"));
			}
		}

		return this.singleUser;
	}

	private getByUidInternal(uid: string): OrganigramUserModel {
		let foundUser = null;

		this.users.forEach(user => {
			if (user.uid == uid) {
				foundUser = user;
			}
		});

		return foundUser;
	}
}
