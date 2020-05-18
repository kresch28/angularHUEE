import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoModel} from '../todo-list/todo-list.component';

@Component({
	selector: 'app-todo-list-item',
	templateUrl: './todo-list-item.component.html',
	styleUrls: ['./todo-list-item.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListItemComponent {
	@Input() todo: TodoModel;
	@Output() itemClicked = new EventEmitter<MouseEvent>();
	@Output() itemToRemove = new EventEmitter<MouseEvent>();
}
