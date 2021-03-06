import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import * as firebase from "firebase";

@Injectable({
	providedIn: 'root'
})
export class FirebaseInitialisationService {

	constructor() {
		if (!firebase.apps.length) {
			firebase.initializeApp(environment.firebase);
		}
	}
}
