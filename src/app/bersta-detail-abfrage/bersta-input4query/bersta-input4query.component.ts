import { Component, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';

import { BerstaStore } from '../../app-signal-store';
import { padArticleNoWithZeros } from '../../common/berstaTypes';

@Component({
	selector: 'app-bersta-input4query',
	imports: [MatInput, MatFormField, MatInputModule, MatButtonModule, FormsModule, MatIconModule],
	templateUrl: './bersta-input4query.component.html',
	styleUrl: './bersta-input4query.component.scss',
})
export class BerstaInput4queryComponent {
	//searchFilter = 'Poccocinio';
	searchFilter = 'Brot';
	searchWithArticelNo = '2005';
	queryString = '';
	berstaStore = inject(BerstaStore);

	constructor() {
		effect(() => {
			const excelSearch = this.berstaStore.excelQuery();
			if (excelSearch) {
				if (excelSearch.searchText.length > 0 || excelSearch.articleNo.length > 0) {
					this.searchFilter = excelSearch.searchText.trim();
					this.searchWithArticelNo = excelSearch.articleNo.trim();
					this.queryByArticelNo();
				}
			}
		});
	}
	queryDetail() {
		this.queryString = this.searchFilter;
		this.query();
	}
	queryByArticelNo() {
		this.queryString = padArticleNoWithZeros(this.searchWithArticelNo);
		this.query();
	}

	private query() {
		this.berstaStore.doQueryDetails(this.queryString);
	}
}
