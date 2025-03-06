import { Clipboard } from '@angular/cdk/clipboard';
import { Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { BerstaStore } from '../../app-signal-store';

@Component({
	selector: 'app-bersta-excel-input',
	imports: [MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule, MatIcon],
	templateUrl: './bersta-excel-input.component.html',
	styleUrl: './bersta-excel-input.component.scss',
})
export class BerstaExcelInputComponent {
	excelRow = '';
	foundRows = 0;
	colSpaltePreis = 7;
	clipboard = inject(Clipboard);

	berstaStore = inject(BerstaStore);
	diffLabel = computed(() => {
		const cols = this.excelRow.split('\t');
		const alterPreis = Number(cols[this.colSpaltePreis]);
		if (alterPreis === this.berstaStore.currentProduct().priceListPos[0].singleUnitPrice) {
			return 'Unveränderter Preis';
		} else {
			this.clipboard.copy(this.berstaStore.currentProduct().priceListPos[0].singleUnitPrice + '');
			return (
				alterPreis + ' ==>' + this.berstaStore.currentProduct().priceListPos[0].singleUnitPrice + ' (in clipboard)'
			);
		}
	});

	transferInput() {
		const cols = this.excelRow.split('\t');
		this.foundRows = cols.length;
		if (this.foundRows === 14) {
			this.searchBersta();
		}
	}

	searchBersta() {
		const cols = this.excelRow.split('\t');

		this.berstaStore.doQueryByExcel(cols[2], cols[1]);
	}
}
