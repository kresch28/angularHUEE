import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss'],
})
export class CollapsibleComponent implements OnInit {
  @Input() title = '';
  @Output() changed = new EventEmitter<boolean>();
  open = false;

  constructor() { }

  ngOnInit(): void {
  }

  onChanged(collapseState: boolean) {
    this.open = collapseState;
    this.emitChange();
  }

  closeCollapse() {
    this.open = false;
    this.emitChange();
  }

  openCollapse() {
    this.open = true;
    this.emitChange();
  }

  private emitChange() {
    this.changed.emit(this.open);
  }
}
