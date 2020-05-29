import {Component, ContentChild, OnInit} from '@angular/core';
import {SearchResult, SearchService} from '../../../../../services/search.service';
import {of, Subject} from 'rxjs';
import {catchError, debounceTime, switchMap, tap} from 'rxjs/operators';
import {SearchBoxTemplateDirective} from '../../../../../directives/search-box-template.directive';

@Component({
	selector: 'app-search-box',
	templateUrl: './search-box.component.html',
	styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
	todos: SearchResult[] = null;
	loading = false;
	search$ = new Subject<string>();
	error: Error = null;

	@ContentChild(SearchBoxTemplateDirective) itemTemplate: SearchBoxTemplateDirective;

	constructor(private searchService: SearchService) {
	}

	ngOnInit(): void {
		this.search$
			.pipe(
				tap(search => {
					this.error = null;
					this.loading = true;
					console.log('tap', search);
				}),
				debounceTime(500),
				switchMap((search) => {
					if (search) {
						return this.searchService.search(search)
							.pipe(
								catchError(error => {
									this.error = error;
									return of([]);
								})
							);
					}
					else {
						return of([] as SearchResult[]);
					}
				}),
				catchError(error => {
					console.log('error', error);
					this.error = error;
					return of([]);
				}),
			)
			.subscribe((todoItems) => {
				this.todos = todoItems.slice(0, 10);
				this.loading = false;
				console.log('subject search string', todoItems);
			});
	}

	onSearch(searchString: string) {
		console.log('searchString', searchString);
		this.search$.next(searchString);
	}

	trackByFn(index: number, item: SearchResult) {
		return item.id;
	}
}
