import { Component, inject } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ExcelFoodsoftElement } from '../ExcelDefinitions';
import { MatInput, MatInputModule } from '@angular/material/input';
import { BerstaStore } from '../../app-signal-store';

@Component({
  selector: 'app-bersta-excel-template',
  imports: [MatTableModule, MatCheckboxModule, MatInputModule,
  ],
  templateUrl: './bersta-excel-template.component.html',
  styleUrl: './bersta-excel-template.component.scss',
})
export class BerstaExcelTemplateComponent {
  displayedColumns = ['verf', 'bestellnummer', 'name', 'notiz', 'produzent', 'herkunft', 'einheit', 'nettopreis', 'mwst', 'pfand', 'gebindegr', 'kategorie'];  berstaStore=inject(BerstaStore);
  dataSource =
    new MatTableDataSource<ExcelFoodsoftElement>([this.berstaStore.template()
]);

  onInputChange( column: string, event: any) {
    if (column === 'verf') {
      this.berstaStore.setDefaultVerf(event.checked);
    } else if ( column === 'mwst') {
      let curMwst = event.target.value.replace(',', '.');
      this.berstaStore.setDefaultMWSt(parseFloat(curMwst));
    } else if ( column === 'notiz') {
      this.berstaStore.setDefaultNotiz(event.target.value);
    } else if ( column === 'kategorie') {
      this.berstaStore.setDefaultKategorie(event.target.value);
    }
  }

}
