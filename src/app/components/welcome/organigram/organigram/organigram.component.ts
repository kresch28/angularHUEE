import { Component, Input, Output } from '@angular/core';

export interface OrganigramModel {
  username: string,
  role: string,
}

@Component({
  selector: 'app-organigram',
  templateUrl: './organigram.component.html',
  styleUrls: ['./organigram.component.scss']
})
export class OrganigramComponent {

  @Input() members: OrganigramModel[];



}
