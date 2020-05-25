import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganigramItemComponent } from './organigram-item.component';

describe('OrganigramItemComponent', () => {
  let component: OrganigramItemComponent;
  let fixture: ComponentFixture<OrganigramItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganigramItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganigramItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
