import {
 Injectable
} from '@angular/core';

@Injectable({
 providedIn:'root'
})
export class CouponService {

 private coupons = [

  {
   code:'WELCOME10',
   discount:10
  },

  {
   code:'SUMMER20',
   discount:20
  }

 ];

 validateCoupon(
 code:string
 ){

  return this.coupons.find(
  coupon =>
  coupon.code === code
  );

 }

}