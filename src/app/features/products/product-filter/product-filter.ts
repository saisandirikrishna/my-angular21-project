import {
 Component,
 inject
} from '@angular/core';

import {
 CommonModule
} from '@angular/common';

import { ProductStateService } from '../../../core/services/product-state.service';

@Component({

 selector:'app-product-filter',

 standalone:true,

 imports:[
  CommonModule
 ],

 templateUrl:
 './product-filter.html'
})
export class ProductFilterComponent {

 state =
 inject(ProductStateService);

 categories = [

   'All',

   'Electronics',

   'Gaming',

   'Fashion',

   'Books'

 ];

}