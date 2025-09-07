import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductList {
   Product = [
  {
    productName: "iPhone 15 Pro",
    productCategory: "Electronics",
    productPrice: 999,
    productQuantity: 25,
    productImageUrl: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop"
  },
  {
    productName: "Samsung Galaxy S24",
    productCategory: "Electronics",
    productPrice: 899,
    productQuantity: 18,
    productImageUrl: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop"
  },
  {
    productName: "Sony WH-1000XM5 Headphones",
    productCategory: "Electronics",
    productPrice: 349,
    productQuantity: 30,
    productImageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
  },
  {
    productName: "MacBook Air M2",
    productCategory: "Electronics",
    productPrice: 1199,
    productQuantity: 15,
    productImageUrl: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop"
  },
  {
    productName: "Nike Air Max 270",
    productCategory: "Clothing",
    productPrice: 150,
    productQuantity: 42,
    productImageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop"
  },
  {
    productName: "Levi's 501 Jeans",
    productCategory: "Clothing",
    productPrice: 89,
    productQuantity: 35,
    productImageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop"
  },
  {
    productName: "Adidas Ultraboost",
    productCategory: "Clothing",
    productPrice: 180,
    productQuantity: 28,
    productImageUrl: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop"
  },
  {
    productName: "The Great Gatsby",
    productCategory: "Books",
    productPrice: 12,
    productQuantity: 60,
    productImageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop"
  },
  {
    productName: "To Kill a Mockingbird",
    productCategory: "Books",
    productPrice: 14,
    productQuantity: 45,
    productImageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop"
  },
  {
    productName: "Dell XPS 13 Laptop",
    productCategory: "Electronics",
    productPrice: 999,
    productQuantity: 20,
    productImageUrl: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop"
  },
  {
    productName: "Apple Watch Series 9",
    productCategory: "Electronics",
    productPrice: 399,
    productQuantity: 22,
    productImageUrl: "https://images.unsplash.com/photo-1579586337278-3f436f25d4d1?w=400&h=400&fit=crop"
  },
  {
    productName: "Cotton T-Shirt",
    productCategory: "Clothing",
    productPrice: 25,
    productQuantity: 100,
    productImageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop"
  },
  {
    productName: "Harry Potter Complete Set",
    productCategory: "Books",
    productPrice: 89,
    productQuantity: 18,
    productImageUrl: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&h=400&fit=crop"
  },
  {
    productName: "KitchenAid Stand Mixer",
    productCategory: "Home & Kitchen",
    productPrice: 299,
    productQuantity: 12,
    productImageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop"
  },
  {
    productName: "Yoga Mat",
    productCategory: "Sports & Fitness",
    productPrice: 45,
    productQuantity: 35,
    productImageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop"
  },
  {
    productName: "Wireless Charging Pad",
    productCategory: "Electronics",
    productPrice: 29,
    productQuantity: 50,
    productImageUrl: "https://images.unsplash.com/photo-1609091839311-d5365f2e0c5a?w=400&h=400&fit=crop"
  },
  {
    productName: "Winter Parka",
    productCategory: "Clothing",
    productPrice: 199,
    productQuantity: 20,
    productImageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop"
  },
  {
    productName: "The Alchemist",
    productCategory: "Books",
    productPrice: 16,
    productQuantity: 40,
    productImageUrl: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&h=400&fit=crop"
  },
  {
    productName: "Bluetooth Speaker",
    productCategory: "Electronics",
    productPrice: 79,
    productQuantity: 30,
    productImageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop"
  },
  {
    productName: "Running Shorts",
    productCategory: "Clothing",
    productPrice: 35,
    productQuantity: 55,
    productImageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop"
  },
  {
    productName: "Coffee Maker",
    productCategory: "Home & Kitchen",
    productPrice: 89,
    productQuantity: 25,
    productImageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop"
  },
  {
    productName: "Dumbbell Set",
    productCategory: "Sports & Fitness",
    productPrice: 149,
    productQuantity: 15,
    productImageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop"
  },
  {
    productName: "Smart TV 55-inch",
    productCategory: "Electronics",
    productPrice: 499,
    productQuantity: 10,
    productImageUrl: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop"
  },
  {
    productName: "Leather Wallet",
    productCategory: "Accessories",
    productPrice: 45,
    productQuantity: 40,
    productImageUrl: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop"
  },
  {
    productName: "The Hobbit",
    productCategory: "Books",
    productPrice: 18,
    productQuantity: 32,
    productImageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop"
  },
  {
    productName: "Gaming Mouse",
    productCategory: "Electronics",
    productPrice: 69,
    productQuantity: 28,
    productImageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop"
  },
  {
    productName: "Sunglasses",
    productCategory: "Accessories",
    productPrice: 120,
    productQuantity: 38,
    productImageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop"
  },
  {
    productName: "Non-Stick Cookware Set",
    productCategory: "Home & Kitchen",
    productPrice: 199,
    productQuantity: 14,
    productImageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop"
  },
  {
    productName: "Basketball",
    productCategory: "Sports & Fitness",
    productPrice: 35,
    productQuantity: 45,
    productImageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=400&fit=crop"
  },
  {
    productName: "1984 by George Orwell",
    productCategory: "Books",
    productPrice: 13,
    productQuantity: 50,
    productImageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop"
  },
  {
    productName: "Wireless Earbuds",
    productCategory: "Electronics",
    productPrice: 129,
    productQuantity: 33,
    productImageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop"
  }
];

  getAllProducts() {
    return this.Product;
  }

  getFeaturedProducts() {
    return this.Product.slice(0, 4); // first 4 products
  }



  
}

