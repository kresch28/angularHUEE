import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TodoFormComponent} from "../components/exercises/exercise-todo-list/todo-form/todo-form.component";
import {TodoListComponent} from "../components/exercises/exercise-todo-list/todo-list/todo-list.component";
import {TodoListItemComponent} from "../components/exercises/exercise-todo-list/todo-list-item/todo-list-item.component";


@NgModule({
	declarations: [TodoFormComponent, TodoListComponent, TodoListItemComponent],
    imports: [
        CommonModule,
        FormsModule
    ],
	exports: [
		TodoFormComponent, TodoListComponent, TodoListItemComponent
	]
})
export class TodoModule {
}
