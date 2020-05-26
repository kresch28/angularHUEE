import {Component, OnInit} from '@angular/core';
import {OrganigramUserModel} from '../organigram-item/organigram-item.component';
import {AuthorisationService} from '../../../services/authorisation.service';

@Component({
	selector: 'app-organigram',
	templateUrl: './organigram.component.html',
	styleUrls: ['./organigram.component.scss']
})
export class OrganigramComponent implements OnInit {
	members: OrganigramUserModel[];
	error: any;
	isLoading: boolean = false;
	hasError: boolean = false;

	constructor(public authService: AuthorisationService) {
	}

	ngOnInit(): void {
		this.isLoading = true;
		this.authService.members$.subscribe(members => {
			this.members = members;
		}, error => {
			this.handleError(error);
		});
		console.log(this.members);

		this.isLoading = false;
	}

	private handleError(error): void {
		this.error = error;
		this.hasError = true;
	}

	// @Input() members: OrganigramModel[];

	/*
  handleNewMember(username: string) {

    this.isLoading = true;

    this.authService.createMember(username)
        .then(member => {
          member.subscribe();
        })
        .catch(error => {
          this.error = error;
        });

    this.isLoading = false;
  }

  add(member: OrganigramModel) {
    this.members.push(member);
    console.log(this.members);
  }
  
	 */

}
