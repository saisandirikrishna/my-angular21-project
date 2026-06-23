import {
 Component,
 signal
} from '@angular/core';

@Component({
 selector:'app-preferences',

 standalone:true,

 templateUrl:
 './preferences.html',

 styleUrl:
 './preferences.css'
})
export class PreferencesComponent {

 notifications =
 signal(true);

 darkMode =
 signal(false);

}