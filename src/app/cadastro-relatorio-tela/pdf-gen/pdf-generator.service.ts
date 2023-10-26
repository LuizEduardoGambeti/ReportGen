import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {


  constructor() { }

  generatePDF(previewContent: string): void {
    const documentDefinition = this.getDocumentDefinition(previewContent);
    pdfMake.createPdf(documentDefinition).open();
  }

  private getDocumentDefinition(previewContent: string): any {
    return {
      content: [
        { text: 'Relatório', style: 'header' },
        { text: previewContent }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        }
      }
    };
  }

}
