import {NgModule} from '@angular/core';
import {CollapseComponent} from './components/collapse/collapse.component';
import {CollapsibleComponent} from './components/collapsible/collapsible.component';
import {CommonModule} from '@angular/common';
import { AccordionComponent } from './components/accordion/accordion.component';

@NgModule({
    declarations: [
        CollapseComponent,
        CollapsibleComponent,
        AccordionComponent
    ],
    exports: [
        CollapseComponent,
        CollapsibleComponent,
        AccordionComponent
    ],
    imports: [CommonModule],
})
export class CollapseModule {

}
