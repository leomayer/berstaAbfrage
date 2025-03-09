import { Routes } from '@angular/router';

import { BerstaDetailAbfrageComponent } from './bersta-detail-abfrage/bersta-detail-abfrage.component';
import { BerstaExcelMainComponent } from './bersta-excel-main/bersta-excel-main.component';
import { BerstaLoginComponent } from './bersta-login/bersta-login.component';

export const routes: Routes = [
	{ path: 'dashboard', component: BerstaLoginComponent },
	{ path: 'search', component: BerstaDetailAbfrageComponent },
	{ path: 'excel', component: BerstaExcelMainComponent },
	//{ path: 'settings', component: SettingsComponent },
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
