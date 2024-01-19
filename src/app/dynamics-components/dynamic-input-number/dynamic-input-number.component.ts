import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamic-input-number',
  templateUrl: './dynamic-input-number.component.html'
})
export class DynamicInputNumberComponent {
  @Input() options: { placeholder: string, title: string }[] = [];
  @Input() value!: string;
  @Output() onValueChange: EventEmitter<string> = new EventEmitter<string>();
  public handleInputChange(newValue: string) {
    this.onValueChange.emit(newValue);
  }
}
