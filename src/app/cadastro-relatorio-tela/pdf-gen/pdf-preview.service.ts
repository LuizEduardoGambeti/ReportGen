import { Injectable } from '@angular/core';
import {PdfGeneratorService} from "./pdf-generator.service";

@Injectable({
  providedIn: 'root'
})
export class PdfPreviewService {

  constructor(private pdfGeneratorService: PdfGeneratorService) {}

  getHtmlPreview(): string {
    const docDefinition = this.pdfGeneratorService.getDocumentDefinition('');
    return this.convertToHtml(docDefinition.content);
  }

  private convertToHtml(content: any[]): string {
    return content.map(item => {
      if (typeof item === 'string') {
        return `<p>${item}</p>`;
      } else if (item.hasOwnProperty('text')) {
        // Adiciona estilos inline baseados nos estilos do PDFMake
        const style = this.getStyle(item.style);
        return `<p>${item}</p>`;
      } else if (item.hasOwnProperty('ol')) {
        const listItems = item.ol.map((li: any) => {
          if (typeof li === 'string') {
            return `<li>${li}</li>`;
          } else if (li.hasOwnProperty('text')) {
            const style = this.getStyle(li.style);
            return `<p>${item}</p>`;
          }
          return `<p>${item}</p>`;
        }).join('');
        return `<ol>${listItems}</ol>`;
      }
      return '';
    }).join('');
  }

  private getStyle(styleName: string): string {
    // Exemplo de estilos; adapte conforme necessário
    switch (styleName) {
      case 'header':
        return 'font-size: 24px; color: #2C3E50;';
      case 'subHeader':
        return 'font-size: 18px; color: #34495E;';
      case 'bodyText':
        return 'font-size: 14px; color: #7F8C8D;';
      default:
        return '';
    }
  }
}
