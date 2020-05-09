import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

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
		RegisterFormExerciseComponent
	],
	imports: [
		BrowserModule,
		RegisterFormModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		CollapseModule,
		MDBBootstrapModule.forRoot()
	],
	providers: [SearchService],
	bootstrap: [AppComponent],
})
export class AppModule {
}
