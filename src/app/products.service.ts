import { Injectable } from '@angular/core';
import { Product } from './components/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts():Product[]{
    return [
      new Product(1,"Fried Chicken",100,0,"https://images.pexels.com/photos/1059943/pexels-photo-1059943.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"),  
      new Product(2,"Nugget",100,20,"https://images.pexels.com/photos/6941010/pexels-photo-6941010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"),
      new Product(3,"Mashed Potato",100,20,"https://images.pexels.com/photos/1059943/pexels-photo-1059943.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"),
      new Product(4,"Egg Tart",100,20,"https://images.pexels.com/photos/6941010/pexels-photo-6941010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"),
      new Product(5,"Chicken Burger",100,0,"https://images.pexels.com/photos/1059943/pexels-photo-1059943.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
    ];
  }
}
