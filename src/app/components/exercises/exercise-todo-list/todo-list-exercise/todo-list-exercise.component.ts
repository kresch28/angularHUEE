import { Component, OnInit } from '@angular/core';
import {TodoModel} from "../todo-list/todo-list.component";
import {TodoService} from "../../../../services/todo.service";

@Component({
  selector: 'app-todo-list-exercise',
  templateUrl: './todo-list-exercise.component.html',
  styleUrls: ['./todo-list-exercise.component.scss']
})
export class TodoListExerciseComponent implements OnInit {
	items: TodoModel[];

	constructor(public todoService: TodoService) { }

	ngOnInit(): void {
		this.todoService.todos$.subscribe(todos => {
			this.items = todos;
		});
	}

	handleTodoClick(todo: TodoModel) {
		const todoCopy: TodoModel = {
			...todo,
			done: !todo.done
		};

		this.todoService.update(todo.id, todoCopy).subscribe();
	}

	handleNewTodo(title: string) {
		this.todoService.create(title).subscribe();
	}

	handleItemToRemove(todo: TodoModel) {
		this.todoService.remove(todo.id);
	}
}
