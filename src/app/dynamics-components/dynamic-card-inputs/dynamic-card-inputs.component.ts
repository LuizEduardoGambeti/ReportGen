import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamic-card-inputs',
  templateUrl: './dynamic-card-inputs.component.html',
  styleUrls: ['./dynamic-card-inputs.component.scss']
})
export class DynamicCardInputsComponent implements OnInit {
  @Input() cardTitle: string = 'Título Padrão';
  @Input() cardIcon: string = 'algum-icon';
  @Output() onValueChange = new EventEmitter<string>();

  ngOnInit(): void {
    // Inicializações podem ser feitas aqui
  }

  // Método para atualizar o título
  public updateTitle(newTitle: string): void {
    this.cardTitle = newTitle;
    this.onValueChange.emit(this.cardTitle); // Emitir evento quando o título é atualizado
  }
}
