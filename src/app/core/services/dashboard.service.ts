import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  categories = signal([
    {
      id: 1,
      name: 'Electronics',
      icon: 'devices'
    },
    {
      id: 2,
      name: 'Fashion',
      icon: 'checkroom'
    },
    {
      id: 3,
      name: 'Gaming',
      icon: 'sports_esports'
    },
    {
      id: 4,
      name: 'Books',
      icon: 'menu_book'
    }
  ]);

}