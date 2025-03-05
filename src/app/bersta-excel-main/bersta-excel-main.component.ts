import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { BerstaExcelInputComponent } from './bersta-excel-input/bersta-excel-input.component';
import { BerstaExcelTemplateComponent } from './bersta-excel-template/bersta-excel-template.component';

@Component({
	selector: 'app-bersta-excel-main',
	imports: [BerstaExcelTemplateComponent, MatCardModule, BerstaExcelInputComponent],
	templateUrl: './bersta-excel-main.component.html',
	styleUrl: './bersta-excel-main.component.scss',
})
export class BerstaExcelMainComponent {}
