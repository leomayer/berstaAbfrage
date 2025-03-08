import { Clipboard } from '@angular/cdk/clipboard';
import { Component, Signal, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { BerstaStore } from '../../app-signal-store';

export type CalcDetails = {
	label: string;
	preis: number;
};

@Component({
	selector: 'app-bersta-excel-input',
	imports: [MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule, MatIcon],
	templateUrl: './bersta-excel-input.component.html',
	styleUrl: './bersta-excel-input.component.scss',
})
export class BerstaExcelInputComponent {
	excelRow = '';
 colSpalteArtikelId = 1;
	colSpaltePreis = 7;
	colSpalteMwst = 8;
	cols4Excel: string[] = [];

	clipboard = inject(Clipboard);

	berstaStore = inject(BerstaStore);

	diffLabel = computed(() => {
		const alterPreis = Number(this.cols4Excel[this.colSpaltePreis]);
		// Preis ist auch NUR gerundet in der Foodcop
		const neuerPreis = Math.round(this.berstaStore.currentProduct().priceListPos[0].singleUnitPrice * 100) / 100;
		if (alterPreis === neuerPreis) {
			return 'Unveränderter Preis';
		} else {
			this.clipboard.copy(neuerPreis + '');
			return alterPreis + ' ==>' + neuerPreis + ' (in clipboard)';
		}
	});

	calcEnheitsPreisPlusMwst: Signal<CalcDetails> = computed(() => {
		const alterPreis = Number(this.cols4Excel[this.colSpaltePreis]);
		const emptyResponse = {
			label: '',
			preis: 0,
		};
		try {
			if (alterPreis !== this.berstaStore.currentProduct().priceListPos[0].singleUnitPrice) {
				const mwst = Number(this.cols4Excel[this.colSpalteMwst]);
				if (mwst > 0) {
					const bruttoPreis =
						(this.berstaStore.currentProduct().priceListPos[0].singleUnitPricePriceList * (100 + mwst)) / 100;
					return {
						label: `Bruttopreis (+ ${mwst}%): `,
						preis: Math.floor(bruttoPreis * 100) / 100,
					};
				}
			}
		} catch {
			// nothing to do - just default...
		}
		return emptyResponse;
	});

	transferInput() {
		this.cols4Excel = this.excelRow.split('\t');
		if (this.cols4Excel.length === 14) {
			this.searchBersta();
		}
	}

	searchBersta() {
		this.cols4Excel = this.excelRow.split('\t');

		this.berstaStore.doQueryByExcel(this.cols4Excel[2], this.cols4Excel[colSpalteArtikelId]);
	}
}
