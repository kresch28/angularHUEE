import {AfterViewInit, Component, ContentChildren, OnDestroy, OnInit, QueryList} from '@angular/core';
import {CollapsibleComponent} from '../collapsible/collapsible.component';
import {forkJoin, Subject} from 'rxjs';
import {switchMap, takeUntil, tap} from 'rxjs/operators';

@Component({
	selector: 'app-accordion',
	templateUrl: './accordion.component.html',
	styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit, OnDestroy, AfterViewInit {
	private onDestroy$ = new Subject();
	private updateList$ = new Subject<QueryList<CollapsibleComponent>>();
	@ContentChildren(CollapsibleComponent) collapsibles: QueryList<CollapsibleComponent>;

	constructor() {
	}

	ngOnInit(): void {
		this.updateList$
			.pipe(
				switchMap(list => {
					const observables = [];

					for (const collapsible of list) {
						const observable = collapsible.changed.pipe(
							tap(opened => {
								if (opened) {
									for (const toClose of list) {
										if (toClose !== collapsible) {
											toClose.open = false;
										}
									}
								}
							}),
						);
						observables.push(observable);
					}

					return forkJoin(observables);
				}),
				takeUntil(this.onDestroy$),
			)
			.subscribe();
	}

	ngAfterViewInit(): void {
		this.updateList$.next(this.collapsibles);

		this.collapsibles.changes
			.pipe(takeUntil(this.onDestroy$))
			.subscribe(param => {
				this.updateList$.next(param);
			});
	}

	ngOnDestroy(): void {
		this.onDestroy$.next();
		this.onDestroy$.complete();
		this.updateList$.complete();
	}
}
