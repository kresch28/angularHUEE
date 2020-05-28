import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {TodoModel} from '../modules/exercises/components/exercise-todo-list/todo-list/todo-list.component';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Injectable({
	providedIn: 'root'
})
export class TodoService {
	private todos: TodoModel[] = [];
	private todosSubject$ = new Subject<TodoModel[]>();
	private firestoreReference: AngularFirestoreCollection<TodoModel>;

	constructor(private firestore: AngularFirestore) {
		this.firestoreReference = firestore.collection<TodoModel>('todos');
		this.firestoreReference.valueChanges()
			.subscribe(value => {
				this.todos = value;

				this.todosSubject$.next(this.todos.sort((a, b) => {
					return a.sortNumber - b.sortNumber;
				}));
				this.todos.forEach((todo, index) => {
					todo.sortNumber = index;
				})

			}, error => {
				this.todosSubject$.error(error);
			});
	}

	get todos$(): Observable<TodoModel[]> {
		return (this.todosSubject$.hasError) ? this.todosSubject$.thrownError : this.todosSubject$.asObservable();
	}
	
	getTodos(): TodoModel[] { return this.todos; }

	async create(title: string): Promise<Observable<TodoModel>> {
		const todo: TodoModel = {
			id: this.firestore.createId(),
			title: title,
			createdAt: new Date(),
			updatedAt: new Date(),
			done: false,
			sortNumber: 0
		};

		return await this.firestoreReference.doc(todo.id).set(todo)
			.then(() => {
				return Promise.resolve<Observable<TodoModel>>(of(todo));
			}, (error) => {
				return Promise.reject(error);
			});
	}

	async update(todo: TodoModel): Promise<Observable<TodoModel>> {
		return await this.firestoreReference.doc(todo.id).set(todo)
			.then(() => {
				return Promise.resolve(of(this.todos.find(currentTodo => currentTodo.id === todo.id)));
			}, (error) => {
				return Promise.reject(error);
			});
	}

	async remove(id: string): Promise<void> {
		return await this.firestoreReference.doc(id).delete()
			.then(() => {
				return Promise.resolve();
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	}
}
