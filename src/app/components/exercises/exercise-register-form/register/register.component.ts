import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	form: FormGroup;

	constructor(private formBuilder: FormBuilder) {
		this.form = this.formBuilder.group({
			username: ['', [Validators.required]],
			email: ['', [Validators.email, Validators.required]],
			password: ['', [Validators.required]],
			passwordRepeat: ['', [Validators.required]],
		}, {
			validators: (formGroup) => {
				const pw = formGroup.value.password;
				const pwRepeat = formGroup.value.passwordRepeat;

				if (pw && pwRepeat && pw !== pwRepeat) {
					return {passwordRepeat: true};
				}

				return null;
			}
		});
	}

	ngOnInit(): void {
	}

	onSubmit() {
		if (this.form.valid) {
			console.log(this.form.value);
		}
	}
}
