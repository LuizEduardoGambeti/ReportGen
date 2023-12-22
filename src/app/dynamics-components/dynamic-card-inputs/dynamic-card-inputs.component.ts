import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dynamic-card-inputs',
  templateUrl: './dynamic-card-inputs.component.html',
  styleUrls: ['./dynamic-card-inputs.component.scss']
})
export class DynamicCardInputsComponent implements OnInit{
  @Input() options: { tipoComponenteInput: string}[] = [];

  ngOnInit(): void {
  }
}
