import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {TodoModel} from "../components/exercises/exercise-todo-list/todo-list/todo-list.component";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";

@Injectable({
	providedIn: 'root'
})
export class TodoService {
	private maxId: number = 0;
	
	private todos: TodoModel[] = [];
	private todosSubject$ = new Subject<TodoModel[]>();
	private firestoreReference: AngularFirestoreCollection<TodoModel>;

	constructor(private firestore: AngularFirestore) {
		this.firestoreReference = firestore.collection<TodoModel>('todos');
		this.firestoreReference.valueChanges().subscribe(items => {
			this.todos = items;
			
			this.todosSubject$.next(this.todos);
		});
	}
	
	get todos$() {
		return this.todosSubject$.asObservable();
	}
	
	create(title: string): Observable<TodoModel> {
		const todo: TodoModel = {
			id: this.firestore.createId(),
			title: title,
			createdAt: new Date(),
			updatedAt: new Date(),
			done: false
		};

		this.firestoreReference.doc(todo.id).set(todo)
			.then((resolved) => {
				// TODO: tell the user, that it was persisted successfully
			}, (error) => {
				// TODO: tell the user, that something went wrong
			});
		return of(todo);
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
	}
}
