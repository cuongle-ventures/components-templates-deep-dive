import { AfterContentInit, Component, ContentChild, ElementRef, HostBinding, HostListener, inject, Input, ViewEncapsulation } from '@angular/core';

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
export class ControlComponent implements AfterContentInit {
  @HostBinding('class') className = 'control';
  @HostBinding('title') title = 'Control';
  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  // Getting current host element
  private el = inject(ElementRef);

  @HostListener('click') onClick() {
    console.log('clicked', this.el, this.control)
  }

  @HostListener('mouseover') onMouseOver() {
    // console.log('mouse over')
  }

  @Input({ required: true }) label!: string;

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit', this.control)
  }
}
