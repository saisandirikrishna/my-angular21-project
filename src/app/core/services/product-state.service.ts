import {
  Injectable,
  signal,
  computed
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductStateService {

  searchKeyword = signal('');

  selectedCategory =
    signal('All');

  selectedSort =
    signal('default');

}