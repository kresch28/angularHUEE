import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {AccordionExerciseComponent} from './components/exercises/exercise-accodion-collapsible/accordion-exercise/accordion-exercise.component';
import {RegisterFormExerciseComponent} from './components/exercises/exercise-register-form/register-form-exercise/register-form-exercise.component';
import {SearchBoxExerciseComponent} from './components/exercises/exercise-search-box/search-box-exercise/search-box-exercise.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {ExerciseOverviewComponent} from './components/exercises/exercise-overview/exercise-overview.component';
import {TodoListExerciseComponent} from './components/exercises/exercise-todo-list/todo-list-exercise/todo-list-exercise.component';
import {ProfileComponent} from './components/profile/profile/profile.component';


const routes: Routes = [{
	path: '',
	component: WelcomeComponent,
}, {
	path: 'about',
	component: AboutComponent,
}, {
	path: 'exercises',
	component: ExerciseOverviewComponent,
	children: [
		{
			path: 'accordion',
			component: AccordionExerciseComponent,
			children: [
				{ path: 'profile', component: ProfileComponent } ]
		}, {
			path: 'register',
			component: RegisterFormExerciseComponent,
		}, {
			path: 'search',
			component: SearchBoxExerciseComponent,
		}, {
			path: 'todo',
			component: TodoListExerciseComponent,
		}]
}, {
	path: 'profile',
	component: ProfileComponent,
}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
