import {NgModule} from '@angular/core';
import {CollapseComponent} from '../../components/exercises/exercise-accodion-collapsible/collapse/collapse.component';
import {CollapsibleComponent} from '../../components/exercises/exercise-accodion-collapsible/collapsible/collapsible.component';
import {CommonModule} from '@angular/common';
import {AccordionComponent} from '../../components/exercises/exercise-accodion-collapsible/accordion/accordion.component';
import {NavigationComponent} from '../../components/navigation/navigation.component';
import {HeaderComponent} from '../../components/header/header.component';
import {AccordionExerciseComponent} from '../../components/exercises/exercise-accodion-collapsible/accordion-exercise/accordion-exercise.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {AppRoutingModule} from "../../app-routing.module";

@NgModule({
	declarations: [
		CollapseComponent,
		CollapsibleComponent,
		AccordionComponent,
		NavigationComponent,
		HeaderComponent,
		AccordionExerciseComponent,
		FooterComponent
	],
	exports: [
		CollapseComponent,
		CollapsibleComponent,
		AccordionComponent,
		HeaderComponent,
		FooterComponent
	],
	imports: [CommonModule, AppRoutingModule],
})
export class CollapseModule {

}
