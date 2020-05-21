import {Component, OnInit} from '@angular/core';
import {TodoModel} from "../todo-list/todo-list.component";
import {TodoService} from "../../../../../services/todo.service";

@Component({
	selector: 'app-todo-list-exercise',
	templateUrl: './todo-list-exercise.component.html',
	styleUrls: ['./todo-list-exercise.component.scss']
})
export class TodoListExerciseComponent implements OnInit {
	items: TodoModel[];
	error: any;
	hasError: boolean = false;
	isLoading: boolean = false;

	constructor(public todoService: TodoService) {
	}

	ngOnInit(): void {
		this.isLoading = true;
		
		// TODO: fix the issue, that sometimes the todos don't get rendered (to reproduce: in exercises overview click on ToDo list, click on any other exercise, click on ToDo list 

		this.todoService.todos$.subscribe(todos => {
			this.items = todos;
		}, error => {
			this.handleError(error);
		});
		
		this.isLoading = false;
	}

	handleTodoClick(todo: TodoModel) {
		this.isLoading = true;

		const todoCopy: TodoModel = {
			...todo,
			done: !todo.done
		};

		this.todoService.update(todo.id, todoCopy)
			.then(todo => {
				todo.subscribe();
			})
			.catch(error => {
				this.error = error;
			});
		
		this.isLoading = false;
	}

	handleNewTodo(title: string) {
		this.isLoading = true;

		this.todoService.create(title)
			.then(todo => {
				todo.subscribe();
			})
			.catch(error => {
				this.error = error;
			});
		
		this.isLoading = false;
	}

	handleItemToRemove(todo: TodoModel) {
		this.isLoading = true;
		
		this.todoService.remove(todo.id).then()
			.catch(error => {
				this.error = error;
			});

		this.isLoading = false;
	}
	
	private handleError(error):void
	{
		this.error = error;
		this.hasError = true;
		
		// TODO: add a time, after the error alert disappears
	}
}
