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
		if (event.previousContainer === event.container && this.items && this.items.length > 1) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
			
			this.items.forEach((todo, arrayIndex) => {
				const changedToDo: TodoModel = {
					...this.items[event.previousIndex],
					sortNumber: arrayIndex
				}

				this.todoService.update(changedToDo);
			});
		}
	}
	
	private increaseSortNumber(todo: TodoModel, index: number)
	{
		if (this.items.length > index + 1 && this.items[index + 1].sortNumber >= todo.sortNumber) 
		{ this.increaseSortNumber(this.items[index + 1], index + 1); }
		
		this.items[index].sortNumber++;
		
		if (this.items.length > index + 1 && this.items[index + 1].sortNumber >= todo.sortNumber) 
		{ this.increaseSortNumber(this.items[index + 1], index + 1); }
	}
}
