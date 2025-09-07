import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop';
import { HomeComponent } from './home/home';
import { ContactComponent } from './contact/contact';
import { CartComponent } from './cart/cart';
import { LoginComponent } from './login/login';
import { PageNotFound } from './page-not-found/page-not-found';
export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'shop', component: ShopComponent},
    {path: 'contacts', component: ContactComponent},
    {path: 'cart', component: CartComponent},
    {path: 'cart', component: CartComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', component: PageNotFound},
    
];
