import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AngularTitleComponent} from './angular-title/angular-title.component';
import {BerstaLoginComponent} from './bersta-login/bersta-login.component';

@Component({
  selector: 'app-root',
  imports: [AngularTitleComponent, BerstaLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'berstaAbfrage';
}
