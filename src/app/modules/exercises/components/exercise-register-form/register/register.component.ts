import {Component, Input, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AuthorisationService} from '../../../../../services/authorisation.service';
import {firebaseUiAuthConfig} from '../../../../../../../FirebaseUiAuthConfig';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	form: FormGroup;

	@Input()
	username: string;
	email: string;
	password: string;

	constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, public authorisationService: AuthorisationService) {
		this.form = this.buildForm();
		this.activatedRoute.paramMap.subscribe(params => {
			if (params.has('username')) {
				this.form.get('username');
			}
		});

	}

	ngOnInit(): void {
	}

	onSubmit() {
		if (this.form.valid) {

			const userName = this.form.get('username');
			const email = this.form.get('email');
			const password = this.form.get('password');

			this.authorisationService.createNewUser(email.value, password.value, userName.value);
			this.authorisationService.createMember(userName.value)
				.then(member => {
					member.subscribe();
				})
				.catch(error => {
				});
		}
	}

	onActivate(componentReference) {
		componentReference.userDetails.valueChanges.subscribe((data) => {
			// Will receive the data from child here
			this.form.markAsDirty();
			const keys = Object.keys(data);
			keys.forEach(key => {
				this.form.controls[key].setValue(data[key]);
			});
		});
	}

	private buildForm() {
		return this.formBuilder.group({
				username: ['', [
					Validators.minLength(firebaseUiAuthConfig.nameMinLength),
					Validators.maxLength(firebaseUiAuthConfig.nameMaxLength)]],
				email: ['', [Validators.email, Validators.required]],
				password: ['', [
					Validators.required,
					Validators.minLength(firebaseUiAuthConfig.passwordMinLength),
					Validators.maxLength(firebaseUiAuthConfig.passwordMaxLength)]],
				passwordRepeat: ['', [Validators.required]],
			},
			{
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
}
