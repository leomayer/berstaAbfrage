import { Component, Signal, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { BerstaStore } from '../../app-signal-store';
import { padArticleNoWithZeros } from '../../common/berstaTypes';
import { BerstaPreisDiffComponent } from '../bersta-preis-diff/bersta-preis-diff.component';

export type CalcDetails = {
	label: string;
	preis: number;
};
export enum ExcelCols {
	ArtikelId = 1,
	Name = 2,
	Preis = 7,
	Mwst = 8,
}

@Component({
	selector: 'app-bersta-excel-input',
	imports: [MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule, MatIcon, BerstaPreisDiffComponent],
	templateUrl: './bersta-excel-input.component.html',
	styleUrl: './bersta-excel-input.component.scss',
})
export class BerstaExcelInputComponent {
	excelRow = '';
	cols4Excel: string[] = [];

	berstaStore = inject(BerstaStore);

	calcEnheitsPreisPlusMwst: Signal<CalcDetails> = computed(() => {
		const alterPreis = Number(this.cols4Excel[ExcelCols.Preis]);
		const emptyResponse = {
			label: '',
			preis: 0,
		};
		try {
			if (alterPreis !== this.berstaStore.currentProduct().priceListPos[0].singleUnitPrice) {
				const mwst = Number(this.cols4Excel[ExcelCols.Mwst]);
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

	detailSearchResult = computed(() => {
		const currentProduct = this.berstaStore.currentProduct();
		if (currentProduct.articleNr) {
			const neuerPreis = Math.round(this.berstaStore.currentProduct().priceListPos[0].singleUnitPrice * 100) / 100;
			return `${currentProduct.articleNr}: ${currentProduct.name} von ${currentProduct.producer} ⇒ € ${neuerPreis}`;
		} else {
			return 'Keine Suche durchgeführt';
		}
	});

	transferInput() {
		this.cols4Excel = this.excelRow.split('\t');
		if (this.cols4Excel.length >= 14) {
			const articleNo = this.cols4Excel[ExcelCols.ArtikelId];
			this.berstaStore.doQueryByExcel(this.cols4Excel[ExcelCols.Name], padArticleNoWithZeros(articleNo));
		}
	}
}
