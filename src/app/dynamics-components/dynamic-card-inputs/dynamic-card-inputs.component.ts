// dynamic-card-inputs.component.ts
import {Component, Input, OnInit} from '@angular/core';
import { ComponentsDataService } from "../dynamic-data/components-data.service";

@Component({
  selector: 'app-dynamic-card-inputs',
  templateUrl: './dynamic-card-inputs.component.html',
  styleUrls: ['./dynamic-card-inputs.component.scss']
})
export class DynamicCardInputsComponent implements OnInit {
  public innerComponentConfigs: any[] = []; // Array para armazenar as configurações dos componentes internos
  @Input() options: {title: string, label: string }[] = [];
  constructor(private componentDataService: ComponentsDataService) {}

  ngOnInit(): void {
    this.componentDataService.getData().subscribe(components => {
      const cardComponent = components.find(c => c.tipoComponente === 'inputCard');
      if (cardComponent && cardComponent.options && cardComponent.options.innerComponents) {
        this.innerComponentConfigs = cardComponent.options.innerComponents;
      }
    });
  }
}
