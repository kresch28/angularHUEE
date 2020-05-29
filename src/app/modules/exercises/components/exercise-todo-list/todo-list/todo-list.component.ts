import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {TodoService} from "../../../../../services/todo.service";

export interface TodoModel {
	id: string,
	title: string,
	createdAt: Date,
	updatedAt: Date,
	done: boolean,
	sortNumber: number
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

	constructor(private todoService: TodoService) {
	}

	trackByFunction(index: number, todo: TodoModel) {
		return todo.id;
	}

	onItemClicked(clickedElement: TodoModel) {
		this.itemClicked.emit(clickedElement);
	}

	onItemToRemove(clickedElement: TodoModel) {
		this.itemToRemove.emit(clickedElement);
	}

	drop(event: CdkDragDrop<TodoModel[]>) {
		moveItemInArray(this.items, event.previousIndex, event.currentIndex);
		this.items.forEach((todo, arrayIndex) => {
			const changedToDo: TodoModel = {
				...this.items[arrayIndex],
				sortNumber: arrayIndex
			}

			this.todoService.update(changedToDo);
		});
	}
}
