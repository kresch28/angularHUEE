import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormExerciseComponent } from './register-form-exercise.component';

describe('RegisterFormExerciseComponent', () => {
  let component: RegisterFormExerciseComponent;
  let fixture: ComponentFixture<RegisterFormExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
