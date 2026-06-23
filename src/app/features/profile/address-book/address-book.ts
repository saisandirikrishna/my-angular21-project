import {
 Component,
 inject
} from '@angular/core';

import {
 UserService
}
from '../../../core/services/user.service';

@Component({
 selector:'app-address-book',

 standalone:true,

 templateUrl:
 './address-book.html',

 styleUrl:
 './address-book.css'
})
export class AddressBookComponent {

 user =
 inject(
 UserService
 ).user;

}