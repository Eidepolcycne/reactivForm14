import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  street = new FormControl('');
  zipCode = new FormControl('');
  city = new FormControl('');
  submitted: boolean = false;
  newUser: any = {};

  inscription() {
    this.submitted = true;
    this.newUser = {
      username: this.username.value,
      email: this.email.value,
      password: this.password.value,
      adress: {
        street: this.street.value,
        zipCode: this.zipCode.value,
        city: this.city.value,
      },
    };
  }
}