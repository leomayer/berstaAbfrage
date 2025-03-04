import { AfterViewInit, Component, ViewChild, effect, inject, viewChild } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { BerstaStore } from '../../app-signal-store';
import { BerstaProductDetail, createEmptyBerstaProductDetail } from '../../common/berstaTypes';

@Component({
	selector: 'app-table-of-products',
	imports: [MatTableModule, MatSortModule],
	templateUrl: './table-of-products.component.html',
	styleUrl: './table-of-products.component.scss',
})
export class TableOfProductsComponent {
	berstStore = inject(BerstaStore);
	displayedColumns: string[] = ['name', 'netWeight', 'producer'];
	dataSource = new MatTableDataSource<BerstaProductDetail>();
	sort = viewChild(MatSort);

	constructor() {
		effect(() => {
			this.dataSource.data = this.berstStore.productQueryResult();
		});
		effect(() => {
			const sort = this.sort();
			if (sort) {
				sort.sort({ id: 'name', start: 'asc', disableClear: true });
				this.dataSource.sort = sort;
			}
		});
	}

	setClickedRow(row: BerstaProductDetail) {
		this.berstStore.doSetSelectedProduct(row);
	}
}
