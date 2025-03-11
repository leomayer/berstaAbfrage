import { Component, inject, OnDestroy } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRipple } from '@angular/material/core';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';
import { BerstaStore } from '../app-signal-store';





@Component({
	selector: 'app-settings',
	imports: [		MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatRipple,
    MatCard,
    MatCardContent,
    MatCardActions,

  ],
	templateUrl: './settings.component.html',
	styleUrl: './settings.component.scss',
})
export class SettingsComponent implements OnDestroy {
  berstaStore = inject(BerstaStore);

  formGroup = new FormGroup({
    berstaLoginUrl: new FormControl(this.berstaStore.loginUrl(), { nonNullable: true }),
    berstaProductQueryUrl: new FormControl(this.berstaStore.productQueryUrl(), { nonNullable: true }),
  });

  ngOnDestroy() {
    this.berstaStore.saveUrls(this.formGroup.controls.berstaLoginUrl.value, this.formGroup.controls.berstaProductQueryUrl.value);
  }
}
