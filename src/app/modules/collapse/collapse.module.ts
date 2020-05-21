import {NgModule} from '@angular/core';
import {CollapseComponent} from '../exercises/components/exercise-accodion-collapsible/collapse/collapse.component';
import {CollapsibleComponent} from '../exercises/components/exercise-accodion-collapsible/collapsible/collapsible.component';
import {CommonModule} from '@angular/common';
import {AccordionComponent} from '../exercises/components/exercise-accodion-collapsible/accordion/accordion.component';
import {AccordionExerciseComponent} from '../exercises/components/exercise-accodion-collapsible/accordion-exercise/accordion-exercise.component';
import {AppRoutingModule} from "../../app-routing.module";

@NgModule({
	declarations: [
		CollapseComponent,
		CollapsibleComponent,
		AccordionComponent,
		AccordionExerciseComponent,
	],
	imports: [CommonModule, AppRoutingModule],
})
export class CollapseModule {

}
