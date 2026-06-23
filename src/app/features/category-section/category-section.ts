import {
  Component,
  inject
} from '@angular/core';

import { DashboardService } from '../../core/services/dashboard.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-category-section',
  standalone: true,
  templateUrl: './category-section.html',
  styleUrl: './category-section.css',
  imports: [RouterLink]
})
export class CategorySectionComponent {

  dashboardService =
    inject(DashboardService);

  categories =
    this.dashboardService.categories;

}