import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {OrganigramWrapperComponent} from "./components/organigram-wrapper/organigram-wrapper.component";
import {LoggedInGuard} from "ngx-auth-firebaseui";


const routes: Routes = [{
	path: 'organigram',
	component: OrganigramWrapperComponent,
	canActivate: [LoggedInGuard]
}, {
	path: 'organigram/:id',
	component: OrganigramWrapperComponent,
	canActivate: [LoggedInGuard]
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class OrganigramRoutingModule {
}
