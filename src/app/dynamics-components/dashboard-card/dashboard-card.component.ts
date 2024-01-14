import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent {
  @Input() title!: string;
  @Input() cardIcon!: string;
  @Output() cardClicked = new EventEmitter<string>();

  constructor(private router: Router) {
  }

}
