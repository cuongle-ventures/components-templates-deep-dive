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