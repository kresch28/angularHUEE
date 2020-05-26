import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchBoxExerciseComponent} from "./components/exercise-search-box/search-box-exercise/search-box-exercise.component";
import {ExerciseOverviewComponent} from "./components/exercise-overview/exercise-overview.component";
import {TodoListExerciseComponent} from "./components/exercise-todo-list/todo-list-exercise/todo-list-exercise.component";
import {ExercisesRoutingModule} from "./exercises-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormBuilder} from "@angular/forms";
import {SearchBoxComponent} from "./components/exercise-search-box/search-box/search-box.component";
import {TodoListComponent} from "./components/exercise-todo-list/todo-list/todo-list.component";
import {LoadingSpinnerComponent} from "./components/exercise-search-box/loading-spinner/loading-spinner.component";
import {TodoFormComponent} from "./components/exercise-todo-list/todo-form/todo-form.component";
import {TodoListItemComponent} from "./components/exercise-todo-list/todo-list-item/todo-list-item.component";
import {CollapseModule} from "../collapse/collapse.module";
import {RegisterComponent} from "./components/exercise-register-form/register/register.component";


@NgModule({
	declarations: [
		ExerciseOverviewComponent,

		RegisterComponent,

		LoadingSpinnerComponent,
		SearchBoxComponent,
		SearchBoxExerciseComponent,

		TodoListComponent,
		TodoFormComponent,
		TodoListItemComponent,
		TodoListExerciseComponent
	],
	imports: [
		CommonModule,
		ExercisesRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		CollapseModule,
		FormBuilder
	],
	exports: [
		ExercisesRoutingModule
	]
})
export class ExercisesModule {
}
