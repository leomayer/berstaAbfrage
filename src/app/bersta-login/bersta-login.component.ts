import { Component, OnDestroy, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';
import { MatRipple } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { BerstaStore } from '../app-signal-store';

@Component({
	selector: 'app-bersta-login',
	imports: [
		MatFormFieldModule,
		ReactiveFormsModule,
		MatInputModule,
		MatButtonModule,
		MatIconModule,
		FormsModule,
		MatRipple,
		MatCard,
		MatCardContent,
		MatCardActions,
	],
	templateUrl: './bersta-login.component.html',
	styleUrl: './bersta-login.component.scss',
})
export class BerstaLoginComponent implements OnDestroy {
	berstaSignalStore = inject(BerstaStore);

	formGroup = new FormGroup({
		username: new FormControl(this.berstaSignalStore.username(), { nonNullable: true }),
		password: new FormControl(this.berstaSignalStore.password(), { nonNullable: true }),
	});

	public showPWD = false;

	ngOnDestroy() {
		this.memorizeCredentials();
	}

	login() {
    this.showPWD=false;
		this.memorizeCredentials();
		this.berstaSignalStore.doLogin();
	}

	private memorizeCredentials() {
		this.berstaSignalStore.setCredentials({
			username: this.formGroup.controls.username.value,
			password: this.formGroup.controls.password.value,
		});
	}

	toggleVisibility() {
		this.showPWD = !this.showPWD;
	}
}
