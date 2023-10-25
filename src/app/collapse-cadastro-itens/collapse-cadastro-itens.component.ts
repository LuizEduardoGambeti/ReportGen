import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-collapse-cadastro-itens',
  templateUrl: './collapse-cadastro-itens.component.html',
  styleUrls: ['./collapse-cadastro-itens.component.scss']
})
export class CollapseCadastroItensComponent {
  @Input() title: string = '';       // Título do painel
  @Input() icon: string = '';  // Ícone do painel
  @Input() active: boolean = false;  // Estado ativo do painel

  customStyle = {
    icon: this.icon,
    background: '#f7f7f7',
    'border-radius': '4px',
    'margin-bottom': '24px',
    'padding-right': '10px',
    border: '0px'
  };
}
