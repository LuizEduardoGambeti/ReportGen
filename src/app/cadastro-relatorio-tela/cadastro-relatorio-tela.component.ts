import {Component, Input} from '@angular/core';
import {v4 as uuidv4} from 'uuid';
import {PdfGeneratorService} from "./pdf-gen/pdf-generator.service";
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-cadastro-relatorio-tela',
  templateUrl: './cadastro-relatorio-tela.component.html',
  styleUrls: ['./cadastro-relatorio-tela.component.scss']
})
export class CadastroRelatorioTelaComponent {
  public items: { id: string, type: string, value?: any }[] = [];
  public isVisible = false;
  @Input() icon: string = '';  // Ícone do painel
  previewContent: string = '';

  constructor(private pdfService: PdfGeneratorService) {
  }

  public updatePreview() {
    this.previewContent = this.items.map(item => item.value).join(' ');
  }


  public addNewItem(type: string) {
    this.items.push({ id: uuidv4(), type: type });
    this.isVisible = false;
  }

  public deleteItem(itemId: string) {
    this.items = this.items.filter(item => item.id !== itemId);
    this.updatePreview();
  }


  public gridStyle = { //style do card
    width: '50%',
    textAlign: 'center'
  };

  public showModal(): void {
    this.isVisible = true;
  }

  public handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  public handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  public generatePDF(): void {
    this.pdfService.generatePDF(this.previewContent);
  }

}
