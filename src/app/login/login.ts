import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Required for template-driven forms
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule], // Import FormsModule
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
    
      form.reset();
    }
  }
}