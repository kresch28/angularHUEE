import {Component, OnInit} from '@angular/core';
import {TodoModel} from "../todo-list/todo-list.component";
import {TodoService} from "../../../../../services/todo.service";
import {LoadingAndErrorHandling} from "../../../../../LoadingAndErrorHandling";

@Component({
	selector: 'app-todo-list-exercise',
	templateUrl: './todo-list-exercise.component.html',
	styleUrls: ['./todo-list-exercise.component.scss']
})
export class TodoListExerciseComponent extends LoadingAndErrorHandling implements OnInit {
	items: TodoModel[];

	constructor(public todoService: TodoService) {
		super();
	}

	ngOnInit(): void {
		this.loading = true;

		this.items = this.todoService.getTodos();

		this.todoService.todos$.subscribe(
			todos => this.items = todos,
			error => this.handleError(error));

		this.loading = false;
	}

	handleTodoClick(todo: TodoModel) {
		this.loading = true;

		const todoCopy: TodoModel = {
			...todo,
			done: !todo.done
		};

		this.todoService.update(todoCopy)
			.then(todo => todo.subscribe())
			.catch(error => this.handleError(error));

		this.loading = false;
	}

	handleNewTodo(title: string) {
		this.loading = true;

		this.todoService.create(title)
			.then(todo => todo.subscribe())
			.catch(error => this.handleError(error));

		this.loading = false;
	}

	handleItemToRemove(todo: TodoModel) {
		this.loading = true;
		
		this.todoService.remove(todo.id)
			.catch(error => this.handleError(error));

		this.loading = false;
	}
}
