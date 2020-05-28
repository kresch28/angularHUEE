import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListExerciseComponent } from './todo-list-exercise.component';
import {TodoService} from '../../../../../services/todo.service';

let TodoServiceStub: any;
describe('TodoListExerciseComponent', () => {
  let component: TodoListExerciseComponent;
  let fixture: ComponentFixture<TodoListExerciseComponent>;
  let todoService: jasmine.SpyObj<TodoService>

  beforeEach(async(() => {
    // TodoServiceStub = jasmine.createSpyObj('TodoService', ['add']);
    // TodoServiceStub.add.and.returnValue(null);
      component = new TodoListExerciseComponent(todoService as TodoService);
    TestBed.configureTestingModule({
      declarations: [ TodoListExerciseComponent ],
      providers: [{ provide: TodoService, useValue: todoService }]
    })
    .compileComponents();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
