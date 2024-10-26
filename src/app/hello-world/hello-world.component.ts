import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent implements OnInit, OnChanges {
  @Input() count?: number;

  name:string = ''

  constructor() {
    console.log('constructor', this.count)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', this.count)
  }

  ngOnInit() {
    console.log('on init', this.count)
  }

  ngOnDestroy() {
    console.log('destroy')
  }
}

// Dependencies injection
// Angular will inject this service when app is create automatically

// If props has value ngOnChanges will run first then ngOnit
// otherwise only ngOnInit will run