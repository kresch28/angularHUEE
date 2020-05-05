import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {AboutComponent} from '../../about/about.component';


const routes: Routes = [{
	path: 'exercises/register',
	component: RegisterComponent,
}, {
	path: 'about',
	component: AboutComponent,
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RegisterExerciseRoutingModule {
}
