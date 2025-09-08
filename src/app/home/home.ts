import { Component } from '@angular/core';
import { ProductList } from '../productservice';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  featuredProducts: any[] = [];
  heroImageUrl: string = 'hero.png';

  constructor(private productService: ProductList) {}

  ngOnInit() {
    this.featuredProducts = this.productService.getFeaturedProducts();

    
  }
}
