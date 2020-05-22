import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchBoxExerciseComponent} from './search-box-exercise.component';

describe('SearchBoxExerciseComponent', () => {
	let component: SearchBoxExerciseComponent;
	let fixture: ComponentFixture<SearchBoxExerciseComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SearchBoxExerciseComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchBoxExerciseComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
