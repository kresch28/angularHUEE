import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {SearchService} from './services/search.service';
import {AboutComponent} from './components/about/about.component';
import {FormsModule, ReactiveFormsModule,} from '@angular/forms';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {ProfileComponent} from './components/user/profile/profile.component';
import {AuthenticationService} from './services/authentication.service';
import {AngularFireAuthModule} from "@angular/fire/auth";
import {firebaseUiAuthConfig} from "../../FirebaseUiAuthConfig";
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ExercisesModule} from "./modules/exercises/exercises.module";
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {OrganigramComponent} from './components/organigram/organigram/organigram.component';
import {OrganigramItemComponent} from './components/organigram/organigram-item/organigram-item.component';
import {LoginComponent} from "./components/login/login.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {DragDropModule} from '@angular/cdk/drag-drop';
import {NodesListService} from './components/welcome/organigram/services/nodes-list.service';
import {OrganigramNodeComponent} from "./components/welcome/organigram/organigram-node/organigram-node.component";
import {OrganigramNodeItemComponent} from "./components/welcome/organigram/organigram-node-item/organigram-node-item.component";
import {FirebaseInitialisationService} from "./services/firebase-initialisation.service";


@NgModule({
	declarations: [
		AppComponent,
		AboutComponent,
		FooterComponent,
		HeaderComponent,
		LoginComponent,
		LogoutComponent,
		NavigationComponent,
		OrganigramComponent,
		OrganigramItemComponent,
		ProfileComponent,
		WelcomeComponent,
		OrganigramNodeComponent,
		OrganigramNodeItemComponent
	],
	imports: [
		BrowserModule,
		AngularFireModule,
		AngularFirestoreModule,
		AngularFireAuthModule,
		NgxAuthFirebaseUIModule.forRoot(environment.firebase, () => 'angularHUEE_factory', firebaseUiAuthConfig),
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		MDBBootstrapModule.forRoot(),
		MatPasswordStrengthModule,
		BrowserAnimationsModule,
		ExercisesModule,
		ExercisesModule,
		DragDropModule
	],
	providers: [FirebaseInitialisationService, SearchService, AuthenticationService, NodesListService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
