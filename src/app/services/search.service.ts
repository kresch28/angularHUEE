import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

export interface SearchResult {
	userId: number;
	id: number;
	title: string;
}

@Injectable({
	providedIn: 'root'
})
export class SearchService {

	constructor(private httpClient: HttpClient) {
	}

	search(searchString: string): Observable<SearchResult[]> {
		const params = new HttpParams()
			.set('q', searchString);

		return this.httpClient.get<SearchResult[]>(`https://jsonplaceholder.typicode.com/todos`, {params});
	}
}
