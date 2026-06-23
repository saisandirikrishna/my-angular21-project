import {
 Component,
 inject
} from '@angular/core';

import {
 FormsModule
} from '@angular/forms';

import { ProductStateService } from '../../../core/services/product-state.service';

@Component({
 selector:'app-product-search',

 standalone:true,

 imports:[
   FormsModule
 ],

 templateUrl:
 './product-search.html'
})
export class ProductSearchComponent {

 state =
 inject(ProductStateService);

}