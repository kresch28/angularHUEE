import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrganigramComponent} from "./components/organigram/organigram.component";
import {OrganigramItemComponent} from "./components/organigram-item/organigram-item.component";
import {OrganigramLatestComponent} from "./components/organigram-latest/organigram-latest.component";
import {OrganigramWrapperComponent} from "./components/organigram-wrapper/organigram-wrapper.component";
import {OrganigramRoutingModule} from "./organigram-routing.module";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {ExercisesModule} from "../exercises/exercises.module";
import {FormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";


@NgModule({
	declarations: [
		OrganigramComponent,
		OrganigramItemComponent,
		OrganigramLatestComponent,
		OrganigramWrapperComponent
	],
    imports: [
        CommonModule,
        OrganigramRoutingModule,
        MDBBootstrapModule,
        DragDropModule,
        ExercisesModule,
        FormsModule,
        MatRadioModule
    ],
	exports: [
		OrganigramRoutingModule,
		OrganigramLatestComponent
	]
})
export class OrganigramModule {
}
