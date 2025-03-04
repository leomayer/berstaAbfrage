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
	searchFilter = 'Brot';
	searchWithArticelNo = '2005';
	queryString = '';
	berstaStore = inject(BerstaStore);

	queryDetail() {
		this.queryString = this.searchFilter;
		this.query();
	}
	queryByArticelNo() {
		this.queryString = this.padArticleNoWithZeros();
		this.query();
	}

	padArticleNoWithZeros() {
		const num = Number(this.searchWithArticelNo); // Use Number for more flexible parsing
		if (isNaN(num)) {
			return this.searchWithArticelNo; // Handle cases where the string isn't a valid number.
		}
		const integerPart = Math.floor(num); // Ensure we only use the integer part.
		return integerPart.toString().padStart(6, '0');
	}

	private query() {
		this.berstaStore.doQueryDetails(this.queryUrl, this.queryString);
	}
}
