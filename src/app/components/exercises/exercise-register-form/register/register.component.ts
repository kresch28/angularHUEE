import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { LoginService} from '../../../../services/login.service';

export interface RegisterModel {
	username: string;
	email: string;
	password: string;
}

export interface RegisterStateModel {
	username: string;
	profiles: RegisterModel[];
}

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
	profiles: RegisterModel[];

	constructor(private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, public loginService: LoginService) {
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
		this.activatedRoute.paramMap.subscribe(params => {
			if (params.has('username')) {
				this.form.get('username');
			}
		});

	}

	ngOnInit(): void {
		this.loginService.login$.subscribe(profiles => {
			this.profiles = profiles;
		});
	}

	onSubmit() {
		if (this.form.valid) {
			console.log(this.form.value);
			this.router.navigate(['/profile'], { state: this.form.value });
			const userName = this.form.get('username');
			const email = this.form.get('email');
			const password = this.form.get('password');
			this.loginService.create(userName.value, email.value, password.value).subscribe();
		}
	}

	onActivate(componentReference) {
		componentReference.userDetails.valueChanges.subscribe((data) =>           {
			// Will receive the data from child here
			this.form.markAsDirty();
			const keys = Object.keys(data);
			keys.forEach(key => {
				this.form.controls[key].setValue(data[key]);
			});
		});
	}
}
