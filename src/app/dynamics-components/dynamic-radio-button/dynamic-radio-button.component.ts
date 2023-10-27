import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamic-radio-button',
  templateUrl: './dynamic-radio-button.component.html'
})
export class DynamicRadioButtonComponent {
  @Input() options: { value: string, label: string }[] = [];
  @Input() value!: string;
  @Output() valueChange = new EventEmitter<string>();
}
