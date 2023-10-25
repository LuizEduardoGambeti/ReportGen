import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {


  constructor() { }

  generatePDF(data: any): void {
    const documentDefinition = this.getDocumentDefinition(data);
    pdfMake.createPdf(documentDefinition).open();
  }

  private getDocumentDefinition(data: any): any {
    return {
      content: [
        // Adicione aqui o conteúdo do seu PDF, usando a variável data como entrada
        // Por exemplo:
        { text: 'Relatório', style: 'header' },
        { text: data.inputContent }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        // Adicione mais estilos conforme necessário
      }
    };
  }}
