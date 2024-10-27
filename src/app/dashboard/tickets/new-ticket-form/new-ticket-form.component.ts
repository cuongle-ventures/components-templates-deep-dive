import { Component } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-new-ticket-form',
  standalone: true,
  imports: [ControlComponent, ButtonComponent],
  templateUrl: './new-ticket-form.component.html',
  styleUrl: './new-ticket-form.component.css'
})
export class NewTicketFormComponent {

}
