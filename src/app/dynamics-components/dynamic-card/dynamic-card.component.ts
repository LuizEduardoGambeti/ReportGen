import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-dynamic-card',
  templateUrl: './dynamic-card.component.html',
  styleUrls: ['./dynamic-card.component.scss']
})
export class DynamicCardComponent {
  @Input() title!: string;
  @Input() cardIcon!: string;
  @Output() cardClicked = new EventEmitter<string>();
  public loadComponent(): void {
    this.cardClicked.emit();
  }
  public gridStyle = { //style do card
    width: '50%',
    textAlign: 'center'
  };
}
