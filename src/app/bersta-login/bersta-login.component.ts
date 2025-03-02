import {Component, inject} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRipple} from '@angular/material/core';
import {BerstaStore} from '../app-signal-store';
import {MatCard, MatCardActions, MatCardContent} from '@angular/material/card';


@Component({
  selector: 'app-bersta-login',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule, MatButtonModule, MatIconModule, FormsModule, MatRipple, MatCard, MatCardContent, MatCardActions
  ],
  templateUrl: './bersta-login.component.html',
  styleUrl: './bersta-login.component.scss'
})
export class BerstaLoginComponent {
  formGroup = new FormGroup({
    berstaUrl: new FormControl('https://shop.bersta.at/ACM/api/auth/login', {nonNullable: true}),
    username: new FormControl('bestellung@1korn.at',{nonNullable: true}),
    password: new FormControl('',{nonNullable: true}),
  })

  berstaSignalStore = inject(BerstaStore);
  public showPWD = false;

   login() {
  this.berstaSignalStore.doLogin({
    berstaUrl: this.formGroup.controls.berstaUrl.value,
    username:this.formGroup.controls.username.value,
    password: this.formGroup.controls.password.value,
  })
  }

  toggleVisibility() {
    this.showPWD = !this.showPWD;
  }
}
