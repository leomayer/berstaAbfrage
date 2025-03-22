import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { BerstaStore } from '../app-signal-store';

@Component({
	selector: 'app-settings',
	imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormsModule, MatCard, MatCardContent],
	templateUrl: './settings.component.html',
	styleUrl: './settings.component.scss',
})
export class SettingsComponent implements OnInit, OnDestroy {
	berstaStore = inject(BerstaStore);

	formGroup = new FormGroup({
		berstaLoginUrl: new FormControl(this.berstaStore.loginUrl(), { nonNullable: true }),
		berstaProductQueryUrl: new FormControl(this.berstaStore.productQueryUrl(), { nonNullable: true }),
	});

	screenSize = '';

	ngOnInit() {
		this.onResize();
	}

	ngOnDestroy() {
		this.berstaStore.saveUrls(
			this.formGroup.controls.berstaLoginUrl.value,
			this.formGroup.controls.berstaProductQueryUrl.value,
		);
	}

	onResize() {
		this.screenSize = `Screensize: ${window.innerWidth} x ${window.innerHeight} (Breite x Höhe)`;
	}

	protected readonly window = window;
}
