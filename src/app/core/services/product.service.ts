import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [

    {
      id:1,
      name:'MacBook Pro',
      category:'Laptop',
      brand:'Apple',
      price:150000,
      stock:10,
      rating:4.8,
      imageUrl:'products/macbook.jpg',
      description:'Powerful laptop'
    },

    {
      id:2,
      name:'Galaxy S25',
      category:'Mobile',
      brand:'Samsung',
      price:85000,
      stock:20,
      rating:4.6,
      imageUrl:'products/samsung.jpg',
      description:'Latest Samsung device'
    }

  ];

  getProducts() {
    return this.products;
  }

  getProductById(id:number) {
    return this.products.find(
      p => p.id === id
    );
  }

}