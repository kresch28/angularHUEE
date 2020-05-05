import {Directive, ElementRef, TemplateRef} from '@angular/core';

@Directive({
	selector: '[appSearchBoxTemplate]'
})
export class SearchBoxTemplateDirective {

	constructor(private element: ElementRef, public templateRef: TemplateRef<any>) {
		console.log("element", element);
		console.log("template", templateRef);
	}

}
