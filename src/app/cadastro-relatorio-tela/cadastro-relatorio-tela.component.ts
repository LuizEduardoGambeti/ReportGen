import {Component, Input, OnInit} from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { PdfGeneratorService } from "./pdf-gen/pdf-generator.service";
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { ComponentsDataService } from "../dynamics-components/dynamic-data/components-data.service";
import {PdfPreviewService} from "./pdf-gen/pdf-preview.service";

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
  public data: { id: string, tipoComponente: string, data: string }[] = [];
  public componentsList: any[] = [];
  public dropdownOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];
  constructor(private pdfService: PdfGeneratorService, private componentDataService: ComponentsDataService, private pdfPreviewService: PdfPreviewService) {
  }

  public ngOnInit(): void {
    this.componentDataService.getData().subscribe(response => {
      this.componentsList = response;
    });
    this.previewContent = this.pdfPreviewService.getHtmlPreview();
  }

  public addComponent(componentType: string): void {
    this.data.push({ id: uuidv4(), tipoComponente: componentType, data: '' });
    this.isVisible = false;
    this.updatePreview();
  }

  public onValueChange(componentId: string, newValue: string): void {
    const component = this.data.find(c => c.id === componentId);
    if (component) {
      component.data = newValue;
    }
    this.updatePreview();
  }

  public updatePreview(): void {
    this.previewContent = this.data.map(item => {
      return `${item.tipoComponente}: ${item.data || ''}`;
    }).join('\n');
  }

  public deleteItem(itemId: string): void {
    this.data = this.data.filter(item => item.id !== itemId);
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
