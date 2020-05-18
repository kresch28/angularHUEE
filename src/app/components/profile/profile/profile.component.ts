import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router} from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
@Input()
  username: string;
userDetails: FormGroup;

  constructor(private  router: Router, private location: Location, private fb: FormBuilder) {
    console.log('route --->', this.router.getCurrentNavigation().extras.state);
    this.username = this.router.getCurrentNavigation().extras.state.username;
    this.userDetails = this.fb.group({
      userName: [''],
    });
  }
  ngOnInit() {
    console.log('state >>>', history.state);
    /*console.log('location >>>', this.location.getState());
    const val: any = this.location.getState();
    const keys = Object.keys(val);
    keys.forEach(key => {
      if (this.userDetails.controls[key]) {
        this.userDetails.controls[key].setValue(val[key]);
      }
    });*/
  }

}
