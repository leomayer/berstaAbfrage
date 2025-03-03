import {AfterViewInit, Component, effect, inject, viewChild, ViewChild} from '@angular/core';
import {BerstaStore} from '../../app-signal-store';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {BerstaProductDetail, createEmptyBerstaProductDetail} from '../../common/berstaTypes';
import {MatSort, MatSortModule} from '@angular/material/sort';

@Component({
  selector: 'app-table-of-products',
  imports: [MatTableModule, MatSortModule],
  templateUrl: './table-of-products.component.html',
  styleUrl: './table-of-products.component.scss'
})
export class TableOfProductsComponent{
  berstStore = inject(BerstaStore);
  displayedColumns: string[] = ['name', 'netWeight', 'producer'];
  clickedRow: BerstaProductDetail = createEmptyBerstaProductDetail();
  dataSource = new MatTableDataSource<BerstaProductDetail>();
  sort=viewChild(MatSort);


  constructor() {
    effect(() => {
      this.dataSource.data = this.berstStore.currentProduct();
    });
    effect(() => {
      const sort=this.sort();
      if (sort) {
        sort.sort({id:'name', start: 'asc', disableClear:true});
        this.dataSource.sort =sort;
      }
    });
  }

  setClickedRow(row: BerstaProductDetail) {
    this.clickedRow = row;
    console.log('clicked row', row)
  }
}
