import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common'
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [NgIf],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  @Input({required: true}) ticket!: Ticket;
  @Output() close = new EventEmitter();

  isDetailVisible: boolean = false;

  onToggleDetails() {
    this.isDetailVisible = !this.isDetailVisible;
  }

  onCloseTicket() {
    this.close.emit(this.ticket.id)
  }
}
