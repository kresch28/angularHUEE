import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {OrganigramUserModel, OrganigramViewUserModel} from "../components/organigram/models";


@Injectable({
	providedIn: 'root'
})
export class UserService {
	private users: OrganigramUserModel[] = [];
	private usersSubject$ = new Subject<OrganigramUserModel[]>();
	public firestoreReference: AngularFirestoreCollection<OrganigramUserModel>;

	public role = 'Developer';

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

	get allUsers$(){
		return (this.usersSubject$.hasError) ? this.usersSubject$.thrownError : this.usersSubject$.asObservable();
	}
	
	get allUsersAsOrganigramViewUser(): OrganigramViewUserModel[]
	{
		let convertedUsers: OrganigramViewUserModel[] = [];
		
		this.users.forEach(user => {
			convertedUsers = [...convertedUsers, this.userAsOrganigramViewUser(user)];
		})
		
		return convertedUsers;
	}

	userAsOrganigramViewUser(user: OrganigramUserModel): OrganigramViewUserModel
	{
		return { ...user, position: { x: 0, y: 0 }, parents: [], children: [], additionalFields: [] };
	}
	
	remove(uid: string)
	{
		this.firestoreReference.doc(uid).delete();
	}
}
