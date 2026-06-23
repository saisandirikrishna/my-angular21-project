import {
 Component,
 inject
} from '@angular/core';

import {
 UserService
}
from '../../../core/services/user.service';

@Component({
 selector:'app-profile-header',

 standalone:true,

 templateUrl:
 './profile-header.html',

 styleUrl:
 './profile-header.css'
})
export class ProfileHeaderComponent {

 user =
 inject(
 UserService
 ).user;

}