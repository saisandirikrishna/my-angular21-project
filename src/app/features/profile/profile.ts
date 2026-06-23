import {
 Component
} from '@angular/core';

import { ProfileHeaderComponent } from './profile-header/profile-header';
import { PersonalInfoComponent } from './personal-info/personal-info';
import { AddressBookComponent } from './address-book/address-book';
import { PreferencesComponent } from './preferences/preferences';
@Component({

 selector:'app-profile',

 standalone:true,

 imports:[

  ProfileHeaderComponent,

  PersonalInfoComponent,

  AddressBookComponent,

  PreferencesComponent

 ],

 templateUrl:
 './profile.html',

 styleUrl:
 './profile.css'
})
export class ProfileComponent {

}