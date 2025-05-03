import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardFooter, MatCardHeader } from '@angular/material/card';

import { BerstaInput4queryComponent } from './bersta-input4query/bersta-input4query.component';
import { BerstaSelectedProductComponent } from './bersta-selected-product/bersta-selected-product.component';
import { TableOfProductsComponent } from './table-of-products/table-of-products.component';

@Component({
	selector: 'app-bersta-detail-abfrage',
	imports: [
		MatCard,
		MatCardContent,
		MatCardHeader,
		BerstaInput4queryComponent,
		TableOfProductsComponent,
		MatCardFooter,
		BerstaSelectedProductComponent,
	],
	templateUrl: './bersta-detail-abfrage.component.html',
	styleUrl: './bersta-detail-abfrage.component.scss',
})
export class BerstaDetailAbfrageComponent {}
