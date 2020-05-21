import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

export interface TodoModel {
	id: string,
	title: string,
	createdAt: Date,
	updatedAt: Date,
	done: boolean
}

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {

	@Input() items: TodoModel[];

	@Output() itemClicked = new EventEmitter<TodoModel>();
	@Output() itemToRemove = new EventEmitter<TodoModel>();

	trackByFunction(index: number, todo: TodoModel) {
		return todo.id;
	}

	onItemClicked(clickedElement: TodoModel) {
		this.itemClicked.emit(clickedElement);
	}
	onItemToRemove(clickedElement: TodoModel) {
		this.itemToRemove.emit(clickedElement);
	}
}
