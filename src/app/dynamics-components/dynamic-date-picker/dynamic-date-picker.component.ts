import { Component, Input, Output, EventEmitter } from '@angular/core';
import {log} from "ng-zorro-antd/core/logger";

@Component({
  selector: 'app-dynamic-date-picker',
  templateUrl: './dynamic-date-picker.component.html'
})
export class DynamicDatePickerComponent {
  @Input() options: { placeholder: string, title: string }[] = [];
  @Input() value: Date = new Date();
  @Output() onValueChange: EventEmitter<Date> = new EventEmitter<Date>();
  public handleInputChange(newValue: Date) {
    this.onValueChange.emit(newValue);
  }
}
