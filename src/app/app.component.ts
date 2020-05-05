import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login-app';
  add = true;

  /*addOrRemoveCollapsible() {
    this.add = !this.add;
  }*/
}
