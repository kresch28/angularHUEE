import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganigramPublicOverviewComponent } from './organigram-public-overview.component';

describe('OrganigramPublicOverviewComponent', () => {
  let component: OrganigramPublicOverviewComponent;
  let fixture: ComponentFixture<OrganigramPublicOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganigramPublicOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganigramPublicOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
