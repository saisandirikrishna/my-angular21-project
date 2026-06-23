import {
 Component,
 inject,
 computed
} from '@angular/core';

import {
 ProductService
}
from '../../../core/services/product.service';

import { ProductCardComponent } from '../../../shared/components/product-card/product-card';
import { ProductSearchComponent } from '../product-search/product-search';

import { ProductFilterComponent } from '../product-filter/product-filter';

import { ProductStateService } from '../../../core/services/product-state.service';

@Component({

 selector:'app-product-list',

 standalone:true,

 imports:[
  ProductCardComponent,
  ProductSearchComponent,
  ProductFilterComponent
 ],

 templateUrl:
 './product-list.html',

 styleUrl:
 './product-list.css'
})
export class ProductListComponent {

 private productService =
 inject(ProductService);

 private state =
 inject(ProductStateService);

 products =
 this.productService.getProducts();

 filteredProducts =
 computed(() => {

   let data =
   [...this.products];

   const search =
   this.state.searchKeyword();

   const category =
   this.state.selectedCategory();

   if(search){

     data = data.filter(
       p =>
       p.name
       .toLowerCase()
       .includes(
        search.toLowerCase()
       )
     );

   }

   if(category !== 'All'){

      data = data.filter(
      p =>
      p.category === category
      );

   }

   return data;

 });

}