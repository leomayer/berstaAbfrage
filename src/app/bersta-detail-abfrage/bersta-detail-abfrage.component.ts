import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatFormField} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {BerstaDetailUrlComponent} from './bersta-detail-url/bersta-detail-url.component';

@Component({
  selector: 'app-bersta-detail-abfrage',
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    BerstaDetailUrlComponent,
  ],
  templateUrl: './bersta-detail-abfrage.component.html',
  styleUrl: './bersta-detail-abfrage.component.scss'
})
export class BerstaDetailAbfrageComponent {

}
