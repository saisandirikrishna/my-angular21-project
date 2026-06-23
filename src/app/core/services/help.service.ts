import {
 Injectable,
 signal
} from '@angular/core';
import { SupportTicket } from '../models/support-ticket.model';

@Injectable({
 providedIn:'root'
})
export class HelpService {

 tickets = signal<SupportTicket[]>([]);

 createTicket(
 ticket:SupportTicket
 ){

   this.tickets.update(
   items =>

   [
     ...items,
     ticket
   ]
   );

 }

}