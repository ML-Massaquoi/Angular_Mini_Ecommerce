import { Component } from '@angular/core';
import  { ProductList } from '../productservice';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-shop',
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})
export class ShopComponent {
  products: any[] = [];
  searchResults: string = '';

  constructor(private productService: ProductList) {}

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }

  // buynow function to alert users to login

  onBuyNow(){
    alert("Please login to proceed with the purchase.");
  }

 

}
