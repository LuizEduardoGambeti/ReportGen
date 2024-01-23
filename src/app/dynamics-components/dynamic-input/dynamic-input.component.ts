import { Component, EventEmitter, Input, OnChanges, Output} from "@angular/core";
@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss']
})

export class DynamicInputComponent {
  @Input() options: { placeholder: string, title: string, label: string }[] = [];
  @Input() value!: string;
  @Output() onValueChange: EventEmitter<string> = new EventEmitter<string>();
  public handleInputChange(newValue: string) {
    this.onValueChange.emit(newValue);
  }

}
