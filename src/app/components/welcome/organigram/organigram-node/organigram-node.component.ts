import {Component, Input, OnInit, Output} from '@angular/core';
import {OrganigramModel} from '../organigram-node-item/organigram-node-item.component';

import { DomSanitizer } from '@angular/platform-browser';

import { NodesListService } from '../services/nodes-list.service';
import {AuthenticationService} from "../../../../services/authentication.service";
import {UserService} from "../../../../modules/organigram/services/user.service";

@Component({
  selector: 'app-organigram-node',
  templateUrl: './organigram-node.component.html',
  styleUrls: ['./organigram-node.component.scss']
})
export class OrganigramNodeComponent implements OnInit{
members: OrganigramModel[];
error: any;
isLoading: boolean = false;
hasError: boolean = false;

  public nodes;
  private config = {
    nodeWidth: 200,
    nodeHeight: 100
  };
  private paneDragging = false;
  private paneTransformState;
  private zoom = 1;
  private paneX = 0;
  private paneY = 0;

  public get paneTransform() {
    return this.paneTransformState;
  }

  public set paneTransform(value) {
    this.paneTransformState = value;
  }


  constructor(public usersService: UserService, private nodesSrv: NodesListService, private sanitizer: DomSanitizer) {
  }

  @Input() set data(data: OrganigramModel[] ) {
    data = this.members;
    this.nodes = this.nodesSrv.loadNodes(data, this.config);
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.usersService.allUsers$.subscribe(members => {
      // this.members = members;
    }, error => {
      this.handleError(error);
    });
    console.log(this.members);

    this.isLoading = false;
  }

  private handleError(error):void
  {
    this.error = error;
    this.hasError = true;
  }

  public get nodeMaker() {
    return this.nodesSrv.makerNode();
  }

  public newNode() {
    this.nodesSrv.newNode();
  }

  public onmousedown() {
    this.paneDragging = true;
  }

  public onmousemove(event) {
    if (this.paneDragging) {
      const { movementX, movementY } = event;

      this.paneX += movementX;
      this.paneY += movementY;
      this.makeTransform();
    }
  }

  public onmouseup() {
    this.paneDragging = false;
  }

  public makeTransform() {
    this.paneTransform = this.sanitizer.bypassSecurityTrustStyle(
        `translate(${this.paneX}px, ${this.paneY}px) scale(${this.zoom})`
    );
  }

  public preventMouse(event) {
    event.stopPropagation();
  }

  public onmousewheel(event) {
    let delta;

    event.preventDefault();
    delta = event.detail || event.wheelDelta;
    this.zoom += delta / 1000 / 2;
    this.zoom = Math.min(Math.max(this.zoom, 0.2), 3);

    this.makeTransform();
  }

  // @Input() members: OrganigramModel[];

  handleNewMember(username: string) {

    this.isLoading = true;

    /*
    this.authService.createMember(username)
        .then(member => {
          member.subscribe();
        })
        .catch(error => {
          this.error = error;
        });
     */

    this.isLoading = false;
  }

  add(member: OrganigramModel) {
    this.members.push(member);
    console.log(this.members);
  }

}
