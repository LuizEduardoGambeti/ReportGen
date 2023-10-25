import {Component, Input} from '@angular/core';
import {v4 as uuidv4} from 'uuid';
import {PdfGeneratorService} from "./pdf-gen/pdf-generator.service";
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-cadastro-relatorio-tela',
  templateUrl: './cadastro-relatorio-tela.component.html',
  styleUrls: ['./cadastro-relatorio-tela.component.scss']
})
export class CadastroRelatorioTelaComponent {
  public items: any[] = [];
  public isVisible = false;
  public inputData: string = '';
  @Input() icon: string = '';  // Ícone do painel
  textInput: string = '';
  previewContent: string = '';

  constructor(private pdfService: PdfGeneratorService) {
  }
  generatePDF() {
    const documentDefinition = {
      content: [
         'teste'
      ]
    };
    pdfMake.createPdf(documentDefinition).open();
  }
  updatePreview() {
    this.previewContent = this.textInput;
  }

  public addNewItem() {
    this.items.push({id: uuidv4()});
    this.isVisible = false;
  }

  public deleteItem(itemId: string) {
    this.items = this.items.filter(item => item.id !== itemId);
    this.previewContent = '';
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
}
