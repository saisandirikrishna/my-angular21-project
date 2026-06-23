import {
 Component
} from '@angular/core';

import { HeroBanner } from '../layout/components/hero-banner/hero-banner';

import { TrendingProductsComponent } from '../products/trending-products/trending-products';
import { CategorySectionComponent } from '../category-section/category-section';

@Component({

 selector:'app-dashboard',

 standalone:true,

 imports:[
  HeroBanner,
  CategorySectionComponent,
  TrendingProductsComponent
 ],

 templateUrl:
 './dashboard.html',

 styleUrl:
 './dashboard.css'

})
export class DashboardComponent {

}