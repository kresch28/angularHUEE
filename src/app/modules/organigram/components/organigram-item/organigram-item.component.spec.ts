import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganigramItemComponent } from './organigram-item.component';
import { NodesListService} from '../services/nodes-list.service';

describe('OrganigramItemComponent', () => {
  let component: OrganigramItemComponent;
  let fixture: ComponentFixture<OrganigramItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NodesListService],
      declarations: [ OrganigramItemComponent ],
      providers: [NodesListService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganigramItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
