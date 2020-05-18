import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SearchBoxComponent} from './components/exercises/exercise-search-box/search-box/search-box.component';
import {HttpClientModule} from '@angular/common/http';
import {SearchService} from './services/search.service';
import {LoadingSpinnerComponent} from './components/exercises/exercise-search-box/loading-spinner/loading-spinner.component';
import {SearchBoxTemplateDirective} from './directives/search-box-template.directive';
import {RegisterComponent} from './components/exercises/exercise-register-form/register/register.component';
import {AboutComponent} from './components/about/about.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CollapseModule} from './modules/collapse/collapse.module';
import {SearchBoxExerciseComponent} from './components/exercises/exercise-search-box/search-box-exercise/search-box-exercise.component';
import { RegisterFormExerciseComponent } from './components/exercises/exercise-register-form/register-form-exercise/register-form-exercise.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ExerciseOverviewComponent } from './components/exercises/exercise-overview/exercise-overview.component';
import {RegisterFormModule} from './components/exercises/exercise-register-form/register-form/register-form.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TodoListExerciseComponent } from './components/exercises/exercise-todo-list/todo-list-exercise/todo-list-exercise.component';
import {TodoModule} from './modules/todo.module';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { ProfileComponent } from './components/profile/profile/profile.component';
import {LoginService} from './services/login.service';


@NgModule({
	declarations: [
		AppComponent,
		SearchBoxComponent,
		LoadingSpinnerComponent,
		SearchBoxTemplateDirective,
		RegisterComponent,
		AboutComponent,
		SearchBoxExerciseComponent,
		WelcomeComponent,
		ExerciseOverviewComponent,
		RegisterFormExerciseComponent,
		TodoListExerciseComponent,
		ProfileComponent
	],
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		RegisterFormModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		CollapseModule,
		TodoModule,
		MDBBootstrapModule.forRoot(),
        TodoModule,
		/*NgxsModule.forRoot([LoginState], {
			developmentMode: !environment.production
		})*/
	],
	providers: [SearchService, LoginService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
