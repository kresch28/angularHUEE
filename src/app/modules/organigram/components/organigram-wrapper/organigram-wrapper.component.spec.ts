import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganigramWrapperComponent } from './organigram-wrapper.component';

describe('OrganigramWrapperComponent', () => {
  let component: OrganigramWrapperComponent;
  let fixture: ComponentFixture<OrganigramWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganigramWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganigramWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
