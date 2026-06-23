export interface SupportTicket {

 id:number | any;

 subject:string | any;

 description:string | any;

 status:
 | 'OPEN'
 | 'IN_PROGRESS'
 | 'RESOLVED';

}