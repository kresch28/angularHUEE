import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {OrganigramWrapperComponent} from "./components/organigram-wrapper/organigram-wrapper.component";


const routes: Routes = [{
	path: 'organigram',
	component: OrganigramWrapperComponent,
}, {
	path: 'organigram/:id',
	component: OrganigramWrapperComponent,
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
