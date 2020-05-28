import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListExerciseComponent } from './todo-list-exercise.component';
import {TodoService} from '../../../../../services/todo.service';

let TodoServiceStub: any;
describe('TodoListExerciseComponent', () => {
  let component: TodoListExerciseComponent;
  let fixture: ComponentFixture<TodoListExerciseComponent>;

  beforeEach(async(() => {
    TodoServiceStub = jasmine.createSpyObj('TodoService', ['add']);
    TodoServiceStub.add.and.returnValue(null);
    TestBed.configureTestingModule({
      declarations: [ TodoListExerciseComponent ],
      providers: [{ provide: TodoService, useValue: TodoServiceStub }]
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
