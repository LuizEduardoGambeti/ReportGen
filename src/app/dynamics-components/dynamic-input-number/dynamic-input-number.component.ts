import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamic-input-number',
  templateUrl: './dynamic-input-number.component.html'
})
export class DynamicInputNumberComponent {
  @Input() value!: number;
  @Output() valueChange = new EventEmitter<number>();
}
