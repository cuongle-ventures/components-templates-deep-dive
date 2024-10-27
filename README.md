## Two way binding

```
<input type="text" [(ngModel)]="name">
<input [ngModel]="name" (ngModelChange)="name = $event" />
```

## Custom two way binding

```
export class ToggleComponent {
  @Input({ required: true }) value!: boolean;
  @Output() valueChange = new EventEmitter();

  @Input({required: true}) count!: number;
  @Output() countChange = new EventEmitter();
}
```

### Usage

```
<app-toggle 
    [(value)]="value"
    [(count)]="count"
/>
```

## Template variable

```
<app-toggle
  #toggleComp
  [(value)]="isToggle"
  [(count)]="count"
/>

<button (click)="toggleComp.toggle()">toggleComp</button>
```

## View child/View children

```
@ViewChild('toggleComp', { static: true }) toggleComp?: ToggleComponent;
@ViewChild('btnComp') btnComp?: ElementRef<HTMLButtonElement>;
@ViewChild('toggleComp', { static: true, read: ViewContainerRef }) toggleComp?: ToggleComponent;
@ViewChild('toggleComp', { static: true, read: ElementRef }) toggleComp?: ToggleComponent;
@ViewChildren(HelloWorldComponent) helloWorldList?: QueryList<HelloWorldComponent>;
```