import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
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
	],
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		AngularFireAuthModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		MDBBootstrapModule.forRoot(),
		NgxAuthFirebaseUIModule.forRoot(environment.firebase, () => 'angularHUEE_factory', firebaseUiAuthConfig),
		MatPasswordStrengthModule,
		BrowserAnimationsModule,
		ExercisesModule
	],
	providers: [SearchService, AuthorisationService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
