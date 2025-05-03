import { Clipboard } from '@angular/cdk/clipboard';
import { Component, computed, inject, input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

import { BerstaStore } from '../../app-signal-store';
import { ExcelCols } from '../bersta-excel-input/bersta-excel-input.component';

import * as Diff from 'diff';

interface ComparisonItem {
	field: string;
	oldValue: string;
	newValue: string;
	diff: Diff4Display;
}

interface Diff4Display {
	tdClass: string;
	diffParts: {
		value: string;
		cssClass: string;
	}[];
}

const createEmptyDiff4Display = (): Diff4Display => {
	return {
		tdClass: '',
		diffParts: [],
	};
};

@Component({
	selector: 'app-bersta-preis-diff',
	imports: [MatListModule, MatTableModule],
	templateUrl: './bersta-preis-diff.component.html',
	styleUrl: './bersta-preis-diff.component.scss',
})
export class BerstaPreisDiffComponent {
	berstaStore = inject(BerstaStore);

	clipboard = inject(Clipboard);
	cols4Excel = input.required<string[]>();

	displayedColumns: string[] = ['field', 'oldValue', 'diff', 'newValue'];
	comparisonData = computed<ComparisonItem[]>(() => {
		// Preis ist auch NUR gerundet in der Foodcop
		let { alterPreis, neuerPreis } = this.getPreis();

		return [
			this.createRowLabel('Beschreibung', this.cols4Excel()[ExcelCols.Name], this.berstaStore.currentProduct().name),
			this.createRowLabel('Preis', this.formatPreis(alterPreis), this.formatPreis(neuerPreis)),
			this.createRowLabel('Einheit', '', this.berstaStore.currentProduct().basePriceUnit ?? 'Nicht verfügbar'),
		];
	});

	/* if a price is given (not 0 and not undefined) - format it with €-sign. Otherwise, return an empty string*/
	private formatPreis(preis: number) {
		if (preis) {
			return `€ ${preis.toFixed(2)}`;
		}
		return 'Kein Preis verfügbar';
	}

	createRowLabel(field: string, oldValue: string, newValue: string): ComparisonItem {
		return {
			field,
			oldValue,
			newValue,
			diff: this.getDiff(oldValue, newValue),
		};
	}

	getDiff(oldValue: string, newValue: string): Diff4Display {
		const ret = createEmptyDiff4Display();
		const oldV = oldValue?.trim() ?? '';
		const newV = newValue?.trim() ?? '';

		if (oldV === newV || oldV.length === 0 || newV.length === 0) {
			ret.tdClass = 'unchanged';
			ret.diffParts = [{ value: '—', cssClass: '' }];
		} else {
			const result = Diff.diffChars(oldV, newV);
			ret.diffParts = result.map((part) => {
				if (part.added) {
					return { value: part.value, cssClass: 'ins' };
				} else if (part.removed) {
					return { value: part.value, cssClass: 'del' };
				} else {
					return { value: part.value, cssClass: '' };
				}
			});
		}
		return ret;
	}

	diffLabel = computed(() => {
		const { alterPreis, neuerPreis } = this.getPreis();
		if (alterPreis === neuerPreis) {
			return 'Unveränderter Preis';
		} else if (alterPreis) {
			this.clipboard.copy(neuerPreis + '');
			return alterPreis + ' ==>' + neuerPreis + ' (in clipboard)';
		}
		return '';
	});

	private getPreis() {
		const alterPreis = Number(this.cols4Excel()[ExcelCols.Preis]);
		// Preis ist auch NUR gerundet in der Foodcop
		let neuerPreis;
		if (this.berstaStore.currentProduct()?.priceListPos) {
			neuerPreis = Math.round(this.berstaStore.currentProduct().priceListPos[0].singleUnitPrice * 100) / 100;
		} else {
			neuerPreis = NaN;
		}

		return { alterPreis, neuerPreis };
	}
}
