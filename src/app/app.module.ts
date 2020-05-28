import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from "@angular/router";
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {SearchService} from './services/search.service';
import {AboutComponent} from './components/about/about.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {ProfileComponent} from './components/user/profile/profile.component';
import {AuthorisationService} from './services/authorisation.service';
import {LogoutComponent} from './components/logout/logout.component';
import {AngularFireAuthModule} from "@angular/fire/auth";
import {firebaseUiAuthConfig} from "../../FirebaseUiAuthConfig";
import {LoginComponent} from './components/login/login.component';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ExercisesModule} from "./modules/exercises/exercises.module";
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import { OrganigramComponent } from './components/organigram/organigram/organigram.component';
import { OrganigramItemComponent } from './components/organigram/organigram-item/organigram-item.component';
import {TreeDiagramModule} from "angular2-tree-diagram";
import {DragDropModule} from "@angular/cdk/drag-drop";


@NgModule({
	declarations: [
		AppComponent,
		AboutComponent,
		FooterComponent,
		HeaderComponent,
		LoginComponent,
		LogoutComponent,
		NavigationComponent,
		ProfileComponent,
		WelcomeComponent,
		OrganigramComponent,
		OrganigramItemComponent,
	],
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		AngularFireDatabaseModule,
		AngularFireAuthModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		MDBBootstrapModule.forRoot(),
		NgxAuthFirebaseUIModule.forRoot(environment.firebase, () => 'angularHUEE_factory', firebaseUiAuthConfig),
		MatPasswordStrengthModule,
		BrowserAnimationsModule,
		ExercisesModule,
		TreeDiagramModule,
		DragDropModule
	],
	providers: [SearchService, AuthorisationService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
