import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionExerciseComponent } from './accordion-exercise.component';

describe('AccordionExerciseComponent', () => {
  let component: AccordionExerciseComponent;
  let fixture: ComponentFixture<AccordionExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
