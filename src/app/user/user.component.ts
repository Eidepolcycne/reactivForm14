import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  newUser : any = {};
  submitted : boolean = false;
  userForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    address: new FormGroup({
      street : new FormControl(''),
      city : new FormControl(''),
      zipCode : new FormControl('')
    })
  });

  inscription (){
    this.newUser = {
      username: this.userForm.value.username,
      email: this.userForm.value.email,
      password: this.userForm.value.password,
      address: {
        street: this.userForm.value.address?.street,
        city: this.userForm.value.address?.city,
        zipCode: this.userForm.value.address?.zipCode
      }
    };
    this.submitted = true;
    this.userForm.reset();
  }
}
