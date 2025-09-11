import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; // Required for template-driven forms
import { RouterModule } from '@angular/router';
import { Authservices } from '../services/authservices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register{

  isloggedin = true;

  authservices: Authservices= inject(Authservices);
  newUser = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  
  onSubmit(form: any) {
    if (form.valid) {
      if (this.newUser.password !== this.newUser.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }

      form.reset();
    }
  }

  onRegister(form: NgForm){


    const email = form.value.email;
    const password = form.value.password;
    this.authservices.register(email, password);
    console.log(form.value);

    form.reset();
    


  }

  onswitch(){

    this.isloggedin = !this.isloggedin
  }

}
