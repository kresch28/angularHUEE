export class LoadingAndErrorHandling {
	loading: boolean;
	hasError: boolean;
	error: Error;
	
	constructor() {
		this.loading = false;
		this.hasError = false;
		this.error = null;
	}

	protected handleError(error: Error) {
		this.hasError = true;
		this.error = error;
		this.loading = false;
	}
}
