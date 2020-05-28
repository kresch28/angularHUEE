import { Component, Input} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { NodesListService } from '../services/nodes-list.service';
import { TreeDiagramNode } from '../classes';
import { TreeDiagramNodeMaker } from '../classes';

export interface OrganigramModel {
  username: string,
  role: string,
}

@Component({
  selector: 'app-organigram-node-item',
  templateUrl: './organigram-node-item.component.html',
  styleUrls: ['./organigram-node-item.component.scss']
})
export class OrganigramNodeItemComponent{
  @Input() user: OrganigramModel;

  public node: TreeDiagramNode | TreeDiagramNodeMaker;
  public childrenTransform;
  private readonly isRtl: boolean;

  constructor(private nodesSrv: NodesListService, private sanitizer: DomSanitizer) {
    this.isRtl = document.getElementsByTagName('html')[0].getAttribute('dir') === 'rtl';
  }

  @Input() set nodeId(guid) {
    this.node = this.nodesSrv.getNode(guid);

    let calculation = `translate(calc(-50% + ${Math.round(
        this.node.width / 2
    )}px), 45px)`;

    if (this.isRtl) {
      calculation = `translate(calc(50% - ${Math.round(
          this.node.width / 2
      )}px), 45px)`;
    }

    this.childrenTransform = this.sanitizer.bypassSecurityTrustStyle(
        calculation
    );
  }

  onNodeBlur(event, nodeId) {
    const node = this.nodesSrv.getNode(nodeId);

    node.displayName = this.user.username;
  }
}



