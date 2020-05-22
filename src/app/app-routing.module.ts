import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {LoginComponent} from "./components/login/login.component";


const routes: Routes = [{
	path: '',
	component: WelcomeComponent,
}, {
	path: 'login',
	component: LoginComponent,
}, {
	path: 'about',
	component: AboutComponent,
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
