import { Component } from '@angular/core';
import  { ProductList } from '../productservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  imports: [CommonModule],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})
export class ShopComponent {
  products: any[] = [];

  constructor(private productService: ProductList) {}

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }
}
