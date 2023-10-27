import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {


  constructor() {
  }

  generatePDF(previewContent: string): void {
    const documentDefinition = this.getDocumentDefinition(previewContent);
    pdfMake.createPdf(documentDefinition).open();
  }

  private getDocumentDefinition(previewContent: string): any {
    return {
      content: [
        {
          text: 'LAUDO TÉCNICO DAS INSTALAÇÕES ELÉTRICAS',
          style: 'header',
          alignment: 'center'
        },
        {
          columns: [
            [
              {text: 'Nº Relatório', style: 'subheader'},
              {text: '159.22'} // Ajustar conforme necessário
            ],
            [
              {text: 'Página:', style: 'subheader'},
              {text: '12/82'} // Ajustar conforme necessário
            ],
            [
              {text: 'Empresa', style: 'subheader'},
              {text: 'De Marchi'} // Ajustar conforme necessário
            ],
            [
              {text: 'Data:', style: 'subheader'},
              {text: '25/08/2022'} // Ajustar conforme necessário
            ],
            [
              {text: 'Local', style: 'subheader'},
              {text: 'Unidade Jundiaí'} // Ajustar conforme necessário
            ]
          ]
        },
        {
          table: {
            body: [
              // Aqui você deve adicionar as linhas da tabela, como:
              ['ITEM', 'DESCRIÇÃO', 'CONFORME', 'NÃO CONFORME']
              // E continuar com as outras linhas conforme o conteúdo necessário.
            ]
          }
        },
        {text: previewContent}
      ],
      styles: {
        header: {
          fontSize: 24,
          bold: true,
          margin: [0, 20, 0, 30],  // Margem superior e inferior aumentada para dar mais espaço
          color: '#2C3E50'  // Uma cor de fonte mais escura
        },
        subHeader: {
          fontSize: 20,
          bold: true,
          margin: [0, 10, 0, 20],  // Espaço um pouco menor que o cabeçalho
          color: '#34495E'
        },
        bodyText: {
          fontSize: 16,
          margin: [0, 0, 0, 15],  // Uma pequena margem inferior para dar espaço entre os parágrafos
          color: '#7F8C8D'
        }
      }
    };
  }

}
