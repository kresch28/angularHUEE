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

	constructor(private initService: FirebaseInitialisationService, private router: Router, private angularFireAuth: AngularFireAuth) {
		this.user = null;

		angularFireAuth.authState.subscribe(next => {
			this.userSubject$.next(next);
			this.user = next;
			
			if (!next)
			{
				this.userSubject$.error(new Error("No user is logged in!"));
			}
		}, error => {
			this.userSubject$.error(error);
			this.user = null;
		});
	}

	get loggedInUser$(): Observable<User> {
		return (this.userSubject$.hasError) ? this.userSubject$.thrownError : this.userSubject$.asObservable();
	}

	get isLoggedIn(): boolean {
		return !!this.user;
	}

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

	/*
	async createMember(username: string): Promise<Observable<OrganigramModel>> {
		const member: OrganigramModel = {
			username: username,
			role: this.role
		};

		return await this.firestoreReference.doc(member.username).set(member)
			.then(() => {
				return Promise.resolve<Observable<OrganigramModel>>(of(member));
			}, (error) => {
				return Promise.reject(error);
			});

		console.log(this.firestoreReference);
	}

	update(id: string, todo: TodoModel): Observable<TodoModel> {
	  this.firestoreReference.doc(id).set(todo)
		  .then((resolved) => {
			// TODO: tell the user, that it was persisted successfully
		  }, (error) => {
			// TODO: tell the user, that something went wrong
		  });
  
	  return of(this.todos.find(currentTodo => currentTodo.id === id));
	}
	*/
}
