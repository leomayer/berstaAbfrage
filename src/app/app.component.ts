import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { AngularTitleComponent } from './angular-title/angular-title.component';
import { BerstaDetailAbfrageComponent } from './bersta-detail-abfrage/bersta-detail-abfrage.component';
import { BerstaExcelMainComponent } from './bersta-excel-main/bersta-excel-main.component';
import { BerstaLoginComponent } from './bersta-login/bersta-login.component';

//
import buildInfo from '../assets/buildDate.json';

@Component({
	selector: 'app-root',
	imports: [
		AngularTitleComponent,
		BerstaLoginComponent,
		BerstaDetailAbfrageComponent,
		BerstaExcelMainComponent,
		DatePipe,
		MatIconModule,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'Bersta-Abfrage';
	protected readonly buildInfo = buildInfo;
}
