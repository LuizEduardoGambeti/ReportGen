import { Component, Input, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { PdfGeneratorService } from "./pdf-gen/pdf-generator.service";
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { ComponentsDataService } from "../dynamics-components/dynamic-data/components-data.service";

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-cadastro-relatorio-tela',
  templateUrl: './cadastro-relatorio-tela.component.html',
  styleUrls: ['./cadastro-relatorio-tela.component.scss']
})
export class CadastroRelatorioTelaComponent implements OnInit {
  public items: { id: string, type: string, value?: any }[] = [];
  public isVisible = false;
  @Input() icon: string = '';
  public previewContent: string = '';
  public data: any[] = [];
  public componentsList: any[] = [];

  constructor(private pdfService: PdfGeneratorService, private componentDataService: ComponentsDataService) {}

  public ngOnInit(): void {
    this.componentDataService.getData().subscribe(response => {
      this.componentsList = response;
    });
  }

  public addComponent(componentType: string): void {
    this.data.push({tipoComponente: componentType});
    this.isVisible = false;
  }

  public updatePreview(): void {
    this.previewContent = this.items.map(item => item.value).join(' ');
  }


  public deleteItem(itemId: string): void {
    this.items = this.items.filter(item => item.id !== itemId);
    this.updatePreview();
  }

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
