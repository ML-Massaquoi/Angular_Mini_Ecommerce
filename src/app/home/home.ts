import { Component } from '@angular/core';
import { ProductList } from '../productservice';
import { CommonModule } from '@angular/common';
//import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [CommonModule, 
    
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  featuredProducts: any[] = [];

  constructor(private productService: ProductList) {}

  ngOnInit() {
    this.featuredProducts = this.productService.getFeaturedProducts();
  }
}
