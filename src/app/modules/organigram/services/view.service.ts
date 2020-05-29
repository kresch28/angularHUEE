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

	private allViews: OrganigramViewModel[] = [];
	private allViewsSubject$: Subject<OrganigramViewModel[]> = new Subject<OrganigramViewModel[]>();
	public firestoreReference: AngularFirestoreCollection<OrganigramViewModel>;

	private ownedViews: OrganigramViewModel[] = [];
	private ownedViewsSubject$: Subject<OrganigramViewModel[]> = new Subject<OrganigramViewModel[]>();
	private currentOwnerId: string = "";

	private publicViews: OrganigramViewModel[] = [];
	private publicViewsSubject$: Subject<OrganigramViewModel[]> = new Subject<OrganigramViewModel[]>();

	constructor(private firestore: AngularFirestore, private authService: AuthenticationService, private usersService: UserService) {
		this.firestoreReference = firestore.collection<OrganigramViewModel>('view');
		this.firestoreReference.valueChanges().subscribe(next => {
			this.allViews = next;
			this.allViewsSubject$.next(this.allViews);
		});

		this.allViewsSubject$.subscribe(next => {
			this.ownedViews = [];
			this.publicViews = [];

			next.forEach(view => {
				if (view.ownerUid == this.currentOwnerId) {
					this.ownedViews.push(view);
				}
				if (view.visibility == OrganigramViewVisibility.Public) {
					this.publicViews.push(view);
				}
			});

			this.publicViews.sort((a, b) => a.updatedAt < b.updatedAt ? 1 : -1);

			this.ownedViewsSubject$.next(this.ownedViews);
			this.publicViewsSubject$.next(this.publicViews);
		});
	}

	getView$(id: string): Observable<OrganigramViewModel> | null {
		return of(this.getView(id));
	}

	getView(id: string): OrganigramViewModel | null {
		let foundView = null;
		this.allViews.forEach(view => {
			if (view.uid == id) {
				foundView = view;
			}
		});

		return foundView;
	}

	async createView(): Promise<Observable<OrganigramViewModel>> {
		const view: OrganigramViewModel = {
			uid: this.firestore.createId(),
			title: "New View",
			visibility: OrganigramViewVisibility.Private,
			createdAt: new Date(),
			updatedAt: new Date(),
			ownerUid: this.authService.getUser().uid,
			usedUsersInformation: this.usersService.getViewInformationForAllUsers
		};

		return new Promise((resolve, reject) => {
			this.firestoreReference.doc(view.uid).set(view)
				.then(
					() => resolve(of(view)),
					error => reject(error));
		})
	}

	async viewExists(uid: string): Promise<boolean> {
		return new Promise<boolean>((resolve, reject) => {
			this.firestoreReference.doc<OrganigramViewModel>(uid).get().subscribe(
				next => resolve(next.exists),
				error => reject(error));
		});
	}

	async viewIsAllowedToBeSeenBy(uid: string): Promise<boolean> {
		if (!(await this.viewExists(uid))) {
			return Promise.resolve(false);
		}

		return new Promise<boolean>((resolve, reject) => {
			const view: OrganigramViewModel = this.getView(uid);

			resolve(this.authService.getUser() != null && view != null &&
				(view.visibility == OrganigramViewVisibility.Public ||
					view.visibility == OrganigramViewVisibility.Unlisted ||
					view.ownerUid == this.authService.getUser().uid));
		});
	}

	getViewsOfOwner$(ownerUid: string): Observable<OrganigramViewModel[]> {
		this.getViewsOfOwner(ownerUid);
		return this.ownedViewsSubject$.asObservable();
	}

	getViewsOfOwner(ownerUid: string): OrganigramViewModel[] {
		if (ownerUid != this.currentOwnerId) {
			this.currentOwnerId = ownerUid;

			this.ownedViews = [];
			this.allViews.forEach(view => {
				if (view.ownerUid == ownerUid) {
					this.ownedViews.push(view);
				}
			});
			this.ownedViewsSubject$.next(this.ownedViews);
		}

		return this.ownedViews;
	}

	getPublicViews$(): Observable<OrganigramViewModel[]> {
		return this.ownedViewsSubject$.asObservable();
	}


	getPublicViews(amount: number = 0): OrganigramViewModel[] {
		return amount == 0 ? this.publicViews : this.publicViews.slice(0, amount);
	}

	async deleteView(uid: string) {
		return new Promise((resolve, reject) => {
			this.firestoreReference.doc(uid).delete()
				.then(() => resolve())
				.catch((error) => reject(error));
		});
	}

	async updateView(view: OrganigramViewModel) {
		await this.firestoreReference.doc(view.uid).set(view);
	}
}
