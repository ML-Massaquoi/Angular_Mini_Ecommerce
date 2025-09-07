import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Required for template-driven forms
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register{
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

      console.log('Registration Submitted!', this.newUser);
      alert(`Welcome aboard, ${this.newUser.fullName}! Your account has been created.`);
      form.reset();
    }
  }

  onRegister(){

    alert('Registration Sucessful ')
  }
}
