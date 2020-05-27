import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {LoginComponent} from "./components/login/login.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {LoggedInGuard} from "ngx-auth-firebaseui";
import {ErrorPageComponent} from "./components/error-page/error-page.component";


const routes: Routes = [{
	path: '',
	component: WelcomeComponent,
}, {
	path: 'login',
	component: LoginComponent,
}, {
	path: 'logout',
	component: LogoutComponent,
	canActivate: [ LoggedInGuard ]
}, {
	path: 'about',
	component: AboutComponent,
}, {
	path: 'profile',
	component: ProfileComponent,
	canActivate: [ LoggedInGuard ]
}, {
	path: '**',
	component: ErrorPageComponent
}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
