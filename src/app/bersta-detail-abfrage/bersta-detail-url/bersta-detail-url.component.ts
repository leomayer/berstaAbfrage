import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';

import { BerstaStore } from '../../app-signal-store';

@Component({
	selector: 'app-bersta-detail-url',
	imports: [MatInput, MatFormField, MatInputModule, MatButtonModule, FormsModule, MatIconModule],
	templateUrl: './bersta-detail-url.component.html',
	styleUrl: './bersta-detail-url.component.scss',
})
export class BerstaDetailUrlComponent {
	queryUrl = 'https://shop.bersta.at/ACM/api/webshop/getproductsextended';
	searchFilter = '2005';
	berstaStore = inject(BerstaStore);

	queryDetail() {
		this.berstaStore.doQueryDetails(this.queryUrl, this.searchFilter);
	}
}
