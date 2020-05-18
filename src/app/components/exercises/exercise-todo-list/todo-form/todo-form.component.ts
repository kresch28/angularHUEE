import {Component, EventEmitter, Output} from '@angular/core';

@Component({
	selector: 'app-todo-form',
	templateUrl: './todo-form.component.html',
	styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

	title: string = '';

	@Output() submittedText = new EventEmitter<string>();

	onSubmit() {
		if (this.title) {
			this.submittedText.emit(this.title);
			this.title = "";
		}
	}

	onInput(event: InputEvent) {
		this.title = (event.target as HTMLInputElement).value;
	}
}
