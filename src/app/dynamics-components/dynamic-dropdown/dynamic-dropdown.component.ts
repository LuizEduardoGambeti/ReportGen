import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-dynamic-dropdown',
  templateUrl: './dynamic-dropdown.component.html'
})
export class DynamicDropdownComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() allowClear: boolean = false;
  @Input() options: { value: string, label: string }[] = [];
  @Input() value: string = 'selecionar';
  @Output() onValueChange = new EventEmitter<string>();

  ngOnInit() {
    if (!this.value && this.options && this.options.length > 0) {
      this.value = this.options[0].value;
    }
  }

  public handleInputChange(newValue: string) {
    this.onValueChange.emit(newValue);
  }
}
