import {Component} from '@angular/core';

@Component({
	selector: 'app-accordion-exercise',
	templateUrl: './accordion-exercise.component.html',
	styleUrls: ['./accordion-exercise.component.scss']
})
export class AccordionExerciseComponent {
	add = true;

	addOrRemoveCollapsible() {
		this.add = !this.add;
	}
}
