import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BerstaExcelTemplateComponent } from './bersta-excel-template/bersta-excel-template.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-bersta-excel-main',
  imports: [
    BerstaExcelTemplateComponent,
    MatCardModule,
  ],
  templateUrl: './bersta-excel-main.component.html',
  styleUrl: './bersta-excel-main.component.scss',
})
export class BerstaExcelMainComponent {
}
