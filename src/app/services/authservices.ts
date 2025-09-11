import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthResponse } from '../model/authResponse';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Authservices {


// instance of httpclient
  http: HttpClient = inject(HttpClient);
    token: any;
  router: any;

  register(email:any, password: any){
    const data = {email: email, password: password, returnSecureToken:true};
   return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCQbvTGc8_AZgtdbgB4RLgvkW3SxvAIWec',data).subscribe({
      next: (res) => {
        console.log('Registration successful', res);

             this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Registration failed', err);
      }
    });
  }
  
}
