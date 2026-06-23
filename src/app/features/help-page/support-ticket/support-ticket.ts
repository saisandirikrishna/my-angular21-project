import {
 Component,
 inject
} from '@angular/core';

import {
 FormBuilder,
 ReactiveFormsModule
} from '@angular/forms';

import {
 HelpService
}
from '../../../core/services/help.service';

@Component({

 selector:'app-support-ticket',

 standalone:true,

 imports:[
  ReactiveFormsModule
 ],

 templateUrl:
 './support-ticket.html'
})
export class SupportTicketComponent {

 private fb =
 inject(FormBuilder);

 helpService =
 inject(HelpService);

 form =
 this.fb.group({

  subject:[''],

  description:['']

 });

 submit(){

   this.helpService
   .createTicket({
    id:1,
    subject:this.form.value.subject,
    description:this.form.value.description,
    status:'OPEN'
   });

 }

}