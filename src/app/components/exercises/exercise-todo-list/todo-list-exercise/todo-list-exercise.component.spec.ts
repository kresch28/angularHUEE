import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListExerciseComponent } from './todo-list-exercise.component';

describe('TodoListExerciseComponent', () => {
  let component: TodoListExerciseComponent;
  let fixture: ComponentFixture<TodoListExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
