import { Component } from '@angular/core';
import { SupportTicketComponent } from './support-ticket/support-ticket';
import { Faq } from './faq/faq';

@Component({
  selector: 'app-help-page',
  imports: [
    SupportTicketComponent,
    Faq
  ],
  templateUrl: './help-page.html',
  styleUrl: './help-page.css',
})
export class HelpPage {}
