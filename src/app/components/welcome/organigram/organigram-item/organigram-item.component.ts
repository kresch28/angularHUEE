import { Component, Input} from '@angular/core';
import { OrganigramModel} from '../organigram/organigram.component';

@Component({
  selector: 'app-organigram-item',
  templateUrl: './organigram-item.component.html',
  styleUrls: ['./organigram-item.component.scss']
})
export class OrganigramItemComponent{
  @Input() members: OrganigramModel;
}
