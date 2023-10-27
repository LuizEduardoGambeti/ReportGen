import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamic-date-picker',
  templateUrl: './dynamic-date-picker.component.html'
})
export class DynamicDatePickerComponent {
  @Input() value: Date = new Date();
  @Output() valueChange = new EventEmitter<Date>();
}
