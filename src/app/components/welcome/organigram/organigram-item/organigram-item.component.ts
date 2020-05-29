import {Component, Input} from '@angular/core';

export interface OrganigramModel {
	username: string,
	role: string,
}

@Component({
	selector: 'app-organigram-item',
	templateUrl: './organigram-item.component.html',
	styleUrls: ['./organigram-item.component.scss']
})
export class OrganigramItemComponent {
	@Input() user: OrganigramModel;

}
