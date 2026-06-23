import { Injectable } from "@angular/core";

@Injectable({
 providedIn:'root'
})
export class InvoiceService {

 generateInvoiceNumber(){

   return `INV-${
   Date.now()
   }`;

 }

 generateOrderNumber(){

   return `ORD-${
   Math.floor(
   Math.random()*100000
   )
   }`;

 }

}