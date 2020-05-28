import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import * as firebase from "firebase";
import {User} from "firebase";
import {Router} from "@angular/router";
import {FirebaseInitialisationService} from "./firebase-initialisation.service";
import {AngularFireAuth} from "@angular/fire/auth";

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {
	userSubject$: Subject<User | null> = new Subject<User | null>();
	private user: User | null;

	constructor(private initService: FirebaseInitialisationService, private router: Router, public angularFireAuth: AngularFireAuth) {
		this.user = null;

		angularFireAuth.authState.subscribe(next => {
			this.userSubject$.next(next);
			this.user = next;
			
		}, error => {
			this.userSubject$.error(error);
			this.user = null;
		});
	}

	get loggedInUser$(): Observable<User> {
		return this.userSubject$.asObservable();
	}

	get isLoggedIn(): boolean {
		return !!this.user;
	}
	
	get isAnonymousUser(): boolean { return this.user.isAnonymous; }
	
	getUser(): User | null { return this.user; }

	createNewUser(email: string, password: string, username: string = ''): Promise<Observable<firebase.User>> | null {
		return this.angularFireAuth.createUserWithEmailAndPassword(email, password)
			.then(value => {
				value.user.displayName = username;
				value.user.sendEmailVerification();
				this.router.navigate(['/profile']);
				
				this.user = value.user;
				this.userSubject$.next(value.user);

				return of(value.user);

			})
			.catch((error) => {
				this.userSubject$.error(error);
				this.user = null;
				return null;
			});

	}

	remove(uid: string) {
		// this.usersService.remove(uid); <-- TODO: test, if that is necessary
		this.angularFireAuth.currentUser.then(value => {
			value.delete();
		});
	}

	logOut(forwardingRoute: string = "") {
		this.angularFireAuth.signOut()
			.then(r => {
				this.router.navigate([forwardingRoute])
			});
	}
}
