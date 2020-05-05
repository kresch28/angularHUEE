import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-collapse',
    templateUrl: './collapse.component.html',
    styleUrls: ['./collapse.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollapseComponent {
    @Input() title = '';
    @Input() open = false;
    @Output() changed = new EventEmitter<boolean>();

    onClick($event: MouseEvent) {
        this.changed.emit(!this.open);
    }
}
