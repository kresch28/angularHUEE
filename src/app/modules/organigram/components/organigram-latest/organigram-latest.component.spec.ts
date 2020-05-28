import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganigramLatestComponent } from './organigram-latest.component';

describe('OrganigramLatestComponent', () => {
  let component: OrganigramLatestComponent;
  let fixture: ComponentFixture<OrganigramLatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganigramLatestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganigramLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
