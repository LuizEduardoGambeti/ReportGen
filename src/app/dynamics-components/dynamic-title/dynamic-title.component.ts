import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dynamic-title',
  templateUrl: './dynamic-title.component.html',
  styleUrls: ['./dynamic-title.component.scss']
})
export class DynamicTitleComponent implements OnInit{
  @Input() options: {label: string }[] = [];
  @Input() value!: string;
  @Output() onValueChange: EventEmitter<string> = new EventEmitter<string>();
  public ngOnInit() {
    console.log(this.options)
  }

  public handleInputChange(newValue: string) {
    this.onValueChange.emit(newValue);
  }
}
