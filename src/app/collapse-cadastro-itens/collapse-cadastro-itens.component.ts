import { Component } from '@angular/core';

@Component({
  selector: 'app-collapse-cadastro-itens',
  templateUrl: './collapse-cadastro-itens.component.html',
  styleUrls: ['./collapse-cadastro-itens.component.scss']
})
export class CollapseCadastroItensComponent {
  panels = [
    {
      active: false,
      disabled: true,
      name: 'Nome do relatório',
      icon: 'double-right',
      customStyle: {
        background: '#f7f7f7',
        'border-radius': '4px',
        'margin-bottom': '24px',
        border: '0px'
      }
    },
    {
      active: false,
      disabled: true,
      name: 'This is panel header 2',
      icon: 'double-right',
      customStyle: {
        background: '#f7f7f7',
        'border-radius': '4px',
        'margin-bottom': '24px',
        border: '0px'
      }
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 3',
      icon: 'double-right',
      customStyle: {
        background: '#f7f7f7',
        'border-radius': '4px',
        'margin-bottom': '24px',
        border: '0px'
      }
    }
  ];

}
