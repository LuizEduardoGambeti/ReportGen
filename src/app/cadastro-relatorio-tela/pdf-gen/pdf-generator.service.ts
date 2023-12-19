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

  public getDocumentDefinition(previewContent: string): any {
    return {
      content: [
        {
          text: 'LAUDO TÉCNICO DAS INSTALAÇÕES ELÉTRICAS',
          style: 'header',
          alignment: 'center'
        },
        {
          columns: [
            { text: '- LTIE -', style: 'subHeader', alignment: 'left' },
            [
              { text: 'Nº : 159/22', style: 'subheader', alignment: 'right' },
              { text: 'PAG : 77/82', style: 'subheader', alignment: 'right' },
              { text: 'DATA : 25/08/2022', style: 'subheader', alignment: 'right' },
            ]
          ],
        },
        { text: 'SITUAÇÃO DA EMPRESA OBSERVADAS COM BASE NO TEXTO DA NR-10', style: 'subHeader', bold: true },
        {
          ol: [
            [
              'A empresa mantém esquemas unifilares atualizado das instalações elétricas com especificação do sistema de aterramento e demais equipamentos e dispositivos de proteção. (item 10.2.3)',
              { text: 'Evidenciado: Não, a empresa possui diagrama unifilar, porém existe a necessidade atualizar, faltando a montagem do prontuário de acordo com a NR10.', style: 'bodyText' },
            ],
            // Continue adicionando os outros itens como o exemplo acima
          ]
        },
        {text: previewContent}
      ],
      styles: {
        header: {
          fontSize: 24,
          bold: true,
          margin: [0, 20, 0, 30],
          color: '#2C3E50'
        },
        subHeader: {
          fontSize: 18,
          bold: true,
          margin: [0, 10, 0, 20],
          color: '#34495E'
        },
        bodyText: {
          fontSize: 14,
          margin: [0, 0, 0, 15],
          color: '#7F8C8D'
        }
      }
    };
  }

}
