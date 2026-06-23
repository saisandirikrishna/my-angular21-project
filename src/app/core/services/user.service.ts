import {
 Injectable,
 signal
} from '@angular/core';

import { User }
from '../models/user.model';

@Injectable({
 providedIn:'root'
})
export class UserService {

 user = signal<User>({

   id:1,

   firstName:'Sai',

   lastName:'Krishna',

   email:'saikrishna@email.com',

   phone:'9876543210',

   avatar:
   'assets/avatar/user.png',

   address:'Hyderabad',

   city:'Hyderabad',

   state:'Telangana',

   postalCode:'500001'
 });

 updateUser(
 user:User
 ){

   this.user.set(user);

 }

}