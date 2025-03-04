import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';

import { BerstaStore } from '../../app-signal-store';

@Component({
	selector: 'app-bersta-selected-product',
	imports: [MatFormField, MatInputModule],
	templateUrl: './bersta-selected-product.component.html',
	styleUrl: './bersta-selected-product.component.scss',
})
export class BerstaSelectedProductComponent {
	berstaStore = inject(BerstaStore);
}
