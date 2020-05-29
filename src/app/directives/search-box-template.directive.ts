import {Directive, TemplateRef} from '@angular/core';

@Directive({
	selector: '[appSearchBoxTemplate]'
})
export class SearchBoxTemplateDirective {
	constructor(public templateRef: TemplateRef<any>) {
	}
}
