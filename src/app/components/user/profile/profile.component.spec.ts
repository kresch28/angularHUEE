import {} from 'jasmine';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule],
      declarations: [ ProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
      expect(component.username).toBe('true');
  });*/
});
