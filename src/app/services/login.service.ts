import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {RegisterModel} from '../components/exercises/exercise-register-form/register/register.component';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Store } from '@ngxs/store';
import { RegisterAction} from '../components/exercises/exercise-register-form/register.action';
import { RegisterStateModel} from '../components/exercises/exercise-register-form/register.store';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private login: RegisterModel[] = [];
  private todosSubject$ = new Subject<RegisterModel[]>();
  private firestoreReference: AngularFirestoreCollection<RegisterModel>;

  constructor(private firestore: AngularFirestore, private store: Store
  ) {
    this.firestoreReference = firestore.collection<RegisterModel>('users');
    this.firestoreReference.valueChanges().subscribe(items => {
      this.login = items;

      this.todosSubject$.next(this.login);
    });
  }

  get login$() {
    return this.todosSubject$.asObservable();
  }

  create(username: string, email: string, password: string): Observable<RegisterModel> {
    const user: RegisterModel = {
      username,
      email,
      password,
    };
    this.firestoreReference.doc(user.username).set(user)
        .then((resolved) => {
          console.log('create');
          // TODO: tell the user, that it was persisted successfully
        }, (error) => {
          console.log('could not create');
          // TODO: tell the user, that something went wrong
        });

    console.log(this.firestoreReference.ref);
    this.store.dispatch(new RegisterAction(username));
    console.log(this.store);
    return of(user);
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
