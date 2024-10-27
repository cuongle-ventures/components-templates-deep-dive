import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common'
import { NewTicketFormComponent } from "./new-ticket-form/new-ticket-form.component";
import { Ticket } from './ticket/ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketFormComponent, NgFor, TicketComponent, NgIf],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAddTicket (data: { title: string, request: string }) {
    this.tickets.push({
      id: new Date().toISOString(),
      title: data.title,
      request: data.request,
      status: 'open'
    })
  }

  onCloseTicket(id: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id !== id) {
        return ticket;
      } else {
        return {
          ...ticket,
          status: 'closed',
        }
      }
    })
  }
}
