import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import * as firebase from "firebase";
import {User} from "firebase";
import {Router} from '@angular/router';
import {OrganigramUserModel} from '../modules/organigram/components/models';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Injectable({
	providedIn: 'root'
})
export class AuthorisationService {
	private members: OrganigramUserModel[] = [];
	private membersSubject$ = new Subject<OrganigramUserModel[]>();
	public firestoreReference: AngularFirestoreCollection<OrganigramUserModel>;

	public role = 'Developer';

	constructor(private router: Router, private firestore: AngularFirestore) {
		this.firestoreReference = firestore.collection<OrganigramUserModel>('users');
		this.firestoreReference.valueChanges()
			.subscribe(value => {
				this.members = value;
				this.membersSubject$.next(this.members);
			}, error => {
				this.membersSubject$.error(error);
			});
	}

	get members$() {
		return (this.membersSubject$.hasError) ? this.membersSubject$.thrownError : this.membersSubject$.asObservable();
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

            remove(id: string): void {
              this.firestoreReference.doc(id).delete()
                  .then((resolved) => {
                    // TODO: tell the user, that it was persisted successfully
                  }, (error) => {
                    // TODO: tell the user, that something went wrong
                  });
            }*/
}
