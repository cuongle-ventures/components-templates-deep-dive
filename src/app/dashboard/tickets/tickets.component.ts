import { Component } from '@angular/core';
import { NewTicketFormComponent } from "./new-ticket-form/new-ticket-form.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketFormComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {

}
