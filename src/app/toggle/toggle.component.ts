import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
  @Input({ required: true }) value!: boolean;
  @Output() valueChange = new EventEmitter();

  @Input({required: true}) count!: number;
  @Output() countChange = new EventEmitter();
}
