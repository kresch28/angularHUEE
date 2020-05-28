import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {OrganigramViewModel, OrganigramViewVisibility} from "../components/models";
import {Observable, of, Subject} from "rxjs";
import {AuthenticationService} from "../../../services/authentication.service";
import {UserService} from "./user.service";

@Injectable({
	providedIn: 'root'
})
export class ViewService {

	private view: OrganigramViewModel = null;
	private viewSubject$ = new Subject<OrganigramViewModel>();
	public firestoreReference: AngularFirestoreCollection<OrganigramViewModel[]>;

	constructor(private firestore: AngularFirestore, private authService: AuthenticationService, private usersService: UserService) {
		this.firestoreReference = firestore.collection<OrganigramViewModel[]>('view');
	}
	
	getView$(id: string): Observable<OrganigramViewModel>
	{
		if (!this.view || this.view.uid != id) {
			this.firestoreReference.doc<OrganigramViewModel>(id).valueChanges()
				.subscribe(value => {
					this.view = value;
					this.viewSubject$.next(this.view);
				}, error => {
					this.viewSubject$.error(error);
				});
		}
		
		return this.viewSubject$.asObservable();
	}
	
	async createView(): Promise<Observable<OrganigramViewModel>>
	{
		const view: OrganigramViewModel = {
			uid: this.firestore.createId(),
			title: "New View",
			visibility: OrganigramViewVisibility.Private,
			createdAt: new Date(),
			updatedAt: new Date(),
			ownerUid: this.authService.getUser().uid,
			usedUsersUid: this.usersService.allUsersUids
		};

		return new Promise((resolve, reject) => {
			console.log(view);
			this.firestoreReference.doc(view.uid).set(view)
			.then(() => {
				resolve(of(view));
			}, error => {
				reject(error);
			});
		}) 
	}
	
	async viewExists(uid: string): Promise<boolean>
	{
		return new Promise<boolean>(((resolve, reject) => {
			this.firestoreReference.doc<OrganigramViewModel>(uid).get().subscribe(next => {
				resolve(next.exists);
			}, error => {
				reject(error);
			});
		}))
	}

	async viewIsAllowedToSee(uid: string): Promise<boolean>
	{
		if (!(await this.viewExists(uid))) { return false; }

		this.firestoreReference.doc<OrganigramViewModel>(uid).ref.get().then(document => {
			console.log(document);
		})
		
		return false;
	}
}
