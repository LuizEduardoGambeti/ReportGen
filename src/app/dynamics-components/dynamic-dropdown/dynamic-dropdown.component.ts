import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamic-dropdown',
  templateUrl: './dynamic-dropdown.component.html'
})
export class DynamicDropdownComponent {
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() allowClear: boolean = false;
  @Input() options: { value: string, label: string }[] = [];
  @Input() value!: string;
  @Output() onValueChange = new EventEmitter<string>();

  selectedValue: any; // Pode ser adaptado conforme a necessidade

  public handleInputChange(newValue: string) {
    this.onValueChange.emit(newValue);
  }
}
