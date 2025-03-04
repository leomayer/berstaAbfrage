import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardFooter, MatCardHeader } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';

import { BerstaDetailUrlComponent } from './bersta-detail-url/bersta-detail-url.component';
import { TableOfProductsComponent } from './table-of-products/table-of-products.component';
import { BerstaSelectedProductComponent } from './bersta-selected-product/bersta-selected-product.component';

@Component({
	selector: 'app-bersta-detail-abfrage',
  imports: [MatCard, MatCardContent, MatCardHeader, BerstaDetailUrlComponent, TableOfProductsComponent, MatCardFooter, BerstaSelectedProductComponent],
	templateUrl: './bersta-detail-abfrage.component.html',
	styleUrl: './bersta-detail-abfrage.component.scss',
})
export class BerstaDetailAbfrageComponent {}
