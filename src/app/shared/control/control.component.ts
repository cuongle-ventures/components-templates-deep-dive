import { Component, ElementRef, HostBinding, HostListener, inject, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  // global styles
  encapsulation: ViewEncapsulation.None,
  host: {
    // class: 'control',
    // '(click)': 'onClick()'
  }
})
export class ControlComponent {
  @HostBinding('class') className = 'control';
  @HostBinding('title') title = 'Control';

  // Getting current host element
  private el = inject(ElementRef);

  @HostListener('click') onClick() {
    console.log('clicked', this.el)
  }

  @HostListener('mouseover') onMouseOver() {
    // console.log('mouse over')
  }

  @Input({ required: true }) label!: string;
}
