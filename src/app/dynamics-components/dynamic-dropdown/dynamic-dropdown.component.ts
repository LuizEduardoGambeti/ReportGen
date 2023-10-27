import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamic-dropdown',
  templateUrl: './dynamic-dropdown.component.html'
})
export class DynamicDropdownComponent {
  @Input() options: { value: string, label: string }[] = [];
  @Input() value!: string;
  @Output() valueChange = new EventEmitter<string>();
}
