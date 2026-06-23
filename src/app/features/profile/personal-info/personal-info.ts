import {
 Component,
 inject
} from '@angular/core';

import {
 ReactiveFormsModule,
 FormBuilder
} from '@angular/forms';

import {
 UserService
}
from '../../../core/services/user.service';

@Component({

 selector:'app-personal-info',

 standalone:true,

 imports:[
  ReactiveFormsModule
 ],

 templateUrl:
 './personal-info.html',

 styleUrl:
 './personal-info.css'
})
export class PersonalInfoComponent {

 private fb =
 inject(FormBuilder);

 userService =
 inject(UserService);

 form =
 this.fb.group({

  firstName:[
   this.userService.user()
   .firstName
  ],

  lastName:[
   this.userService.user()
   .lastName
  ],

  email:[
   this.userService.user()
   .email
  ],

  phone:[
   this.userService.user()
   .phone
  ]

 });

 save(){

   this.userService.updateUser({

     ...this.userService.user(),

     ...this.form.value

   } as any);

 }

}