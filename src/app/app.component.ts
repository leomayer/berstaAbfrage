import { Component } from '@angular/core';
import {AngularTitleComponent} from './angular-title/angular-title.component';
import {BerstaLoginComponent} from './bersta-login/bersta-login.component';
import {BerstaDetailAbfrageComponent} from './bersta-detail-abfrage/bersta-detail-abfrage.component';

@Component({
  selector: 'app-root',
  imports: [AngularTitleComponent, BerstaLoginComponent, BerstaDetailAbfrageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Bersta-Abfrage';
}
