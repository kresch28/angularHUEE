import {RouterModule, Routes} from "@angular/router";
import {ExerciseOverviewComponent} from "./components/exercise-overview/exercise-overview.component";
import {AccordionExerciseComponent} from "./components/exercise-accodion-collapsible/accordion-exercise/accordion-exercise.component";
import {SearchBoxExerciseComponent} from "./components/exercise-search-box/search-box-exercise/search-box-exercise.component";
import {TodoListExerciseComponent} from "./components/exercise-todo-list/todo-list-exercise/todo-list-exercise.component";
import {NgModule} from "@angular/core";
import {RegisterComponent} from "./components/exercise-register-form/register/register.component";


const routes: Routes = [{
	path: 'exercises',
	component: ExerciseOverviewComponent,
	children: [
		{
			path: 'accordion',
			component: AccordionExerciseComponent
		}, {
			path: 'register',
			component: RegisterComponent,
		}, {
			path: 'search',
			component: SearchBoxExerciseComponent,
		}, {
			path: 'todo',
			component: TodoListExerciseComponent,
		}]
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class ExercisesRoutingModule {
}
