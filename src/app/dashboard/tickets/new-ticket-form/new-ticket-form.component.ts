import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket-form',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket-form.component.html',
  styleUrl: './new-ticket-form.component.css'
})
export class NewTicketFormComponent implements AfterViewInit {
  @ViewChild('inputEl') inputEl?: ElementRef<HTMLInputElement>;
  @ViewChild('textarea') textareaEl?: ElementRef<HTMLTextAreaElement>;
  @ViewChild('frm') frm?: ElementRef<HTMLFormElement>;
  @Output() addChange = new EventEmitter<{ title: string; request: string }>();
  
  onSubmit() {
    this.addChange.emit({ 
      title: this.inputEl?.nativeElement.value ?? '', 
      request: this.textareaEl?.nativeElement.value ?? '' 
    })
    this.frm?.nativeElement.reset()
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.inputEl)
  }
}
