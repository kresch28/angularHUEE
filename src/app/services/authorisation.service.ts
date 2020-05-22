import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import * as firebase from "firebase";
import {User} from "firebase";
import {Router} from "@angular/router";

@Injectable({
	providedIn: 'root'
})
export class AuthorisationService {
	constructor(private router: Router) {
		firebase.auth().onAuthStateChanged((response) => {
			if (response) {
				console.log('Logged in :)');
			} else {
				console.log('Logged out :(');
			}
		})
	}

	get loggedInUser(): User {
		return firebase.auth().currentUser;
	}

	createNewUser(email: string, password: string, username: string = ''): Promise<Observable<firebase.User>> | null {

		return firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(value => {
				value.user.displayName = username;
				value.user.sendEmailVerification();
				this.router.navigate(['/profile']);

				return of(value.user);
			})
			.catch((error) => {
				// TODO: show the error
				return null;
			});
	}

	/*
	update(id: string, todo: TodoModel): Observable<TodoModel> {
	  this.firestoreReference.doc(id).set(todo)
		  .then((resolved) => {
			// TODO: tell the user, that it was persisted successfully
		  }, (error) => {
			// TODO: tell the user, that something went wrong
		  });
  
	  return of(this.todos.find(currentTodo => currentTodo.id === id));
	}
  
	remove(id: string): void {
	  this.firestoreReference.doc(id).delete()
		  .then((resolved) => {
			// TODO: tell the user, that it was persisted successfully
		  }, (error) => {
			// TODO: tell the user, that something went wrong
		  });
	}*/
}
