import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss']
})
export class DynamicInputComponent {

  @Input() placeholder: string = 'Digite algo...';
  @Input() value!: string;
  @Output() valueChange = new EventEmitter<string>();

  constructor() { }

  ngOnChanges() {
    this.valueChange.emit(this.value);
  }

}
