import {
  Component,
  ComponentFactoryResolver,
  Input,
  Type,
  ViewChild,
  AfterViewInit,
  ComponentRef,
  Output, EventEmitter, ChangeDetectorRef
} from '@angular/core';
import { DynamicUploadComponent } from "../dynamic-upload/dynamic-upload.component";
import { DynamicDatePickerComponent } from "../dynamic-date-picker/dynamic-date-picker.component";
import { AnchorDirective } from "../anchor/anchor.directive";
import { DynamicCardComponent } from "../dynamic-card/dynamic-card.component";
import { DynamicDropdownComponent } from "../dynamic-dropdown/dynamic-dropdown.component";
import { DynamicInputComponent } from "../dynamic-input/dynamic-input.component";
import { DynamicInputNumberComponent } from "../dynamic-input-number/dynamic-input-number.component";
import { DynamicRadioButtonComponent } from "../dynamic-radio-button/dynamic-radio-button.component";
import { AnchorService } from "../anchor/anchor.service";
import {ComponentsDataService} from "../dynamic-data/components-data.service";
import {DynamicCardInputsComponent} from "../dynamic-card-inputs/dynamic-card-inputs.component";

@Component({
  selector: 'app-dynamic-container',
  templateUrl: './dynamic-container.component.html'
})
export class DynamicContainerComponent implements AfterViewInit {
  @ViewChild(AnchorDirective, { static: false }) appAnchor!: AnchorDirective;
  @Input() componentType!: string;
  @Input() value: string = '';
  @Output() onValueChange = new EventEmitter<string>();

  private componentRef!: ComponentRef<any>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private anchorService: AnchorService,
    private componentsDataService: ComponentsDataService,
    private changeDetectorRef: ChangeDetectorRef

  ) { }

  ngAfterViewInit() {
    this.anchorService.viewContainerRef = this.appAnchor.viewContainerRef;
    this.loadComponent();
  }

  public handleValueChange(newValue: string) {
    this.onValueChange.emit(newValue);
  }

  public loadComponent() {
    const viewContainerRef = this.anchorService.viewContainerRef;
    if (!viewContainerRef) {
      console.error('ViewContainerRef is null');
      return;
    }

    viewContainerRef.clear();

    const componentMap: { [key: string]: Type<any> } = {
      datePicker: DynamicDatePickerComponent,
      upload: DynamicUploadComponent,
      card: DynamicCardComponent,
      dropDown: DynamicDropdownComponent,
      input: DynamicInputComponent,
      number: DynamicInputNumberComponent,
      radioButton: DynamicRadioButtonComponent,
      inputCard: DynamicCardInputsComponent
    };

    const componentToLoad = componentMap[this.componentType as keyof typeof componentMap];
    if (componentToLoad) {

      const factory = this.componentFactoryResolver.resolveComponentFactory(componentToLoad);
      this.componentRef = viewContainerRef.createComponent(factory);

      this.componentRef.instance.value = this.value;
      this.changeDetectorRef.detectChanges();
      this.componentRef.instance.onValueChange.subscribe(this.handleValueChange.bind(this));
      if (componentToLoad === DynamicRadioButtonComponent ) {
        this.loadOptionsForRadioButton();
      } else if (componentToLoad === DynamicDropdownComponent){
        console.log('teste')
        this.loadOptionsForDropdown();
      }
      else if (componentToLoad === DynamicCardInputsComponent){
        console.log('eu existo')
        this.loadOptionsForCardInput();
      }
    }
  }

  private loadOptionsForRadioButton() {
    this.componentsDataService.getData().subscribe(components => {
      const radioButtonComponent = components.find(c => c.tipoComponente === 'radioButton');
      const dropdowncomponent = components.find(c => c.tipoComponente === 'dropDown');
      console.log(dropdowncomponent.options)
      if (radioButtonComponent && radioButtonComponent.options) {
        this.setOptionsForRadioButton(radioButtonComponent.options);
      }
    });
  }

  private setOptionsForRadioButton(options: any[]) {
    if (this.componentRef && this.componentRef.instance instanceof DynamicRadioButtonComponent) {
      this.componentRef.instance.options = options;
    }
  }
  public loadOptionsForDropdown() {
    this.componentsDataService.getData().subscribe(components => {
      console.log("Componentes recebidos do serviço:", components); // Log 1
      const dropdowncomponent = components.find(c => c.tipoComponente === 'dropDown');
      console.log("Componente Dropdown encontrado:", dropdowncomponent); // Log 2
      if (dropdowncomponent && dropdowncomponent.options) {
        this.setOptionsForDropdown(dropdowncomponent.options);
        this.changeDetectorRef.detectChanges(); // Adicione esta linha se necessário
      } else {
        console.log("Nenhum componente Dropdown ou opções encontradas"); // Log 3
      }
    });
  }

  private setOptionsForDropdown(options: any[]) {
    console.log("Definindo opções para Dropdown:", options); // Log 4
    if (this.componentRef && this.componentRef.instance instanceof DynamicDropdownComponent) {
      this.componentRef.instance.options = options;
      console.log("Opções definidas para o componente Dropdown"); // Log 5
    } else {
      console.log("ComponentRef é nulo ou não é uma instância de DynamicDropdownComponent"); // Log 6
    }
  }
  public loadOptionsForCardInput() {
    
    this.componentsDataService.getData().subscribe(components => {
      console.log("Componentes recebidos do serviço:", components); // Log 1
      const cardComponent = components.find(c => c.tipoComponente === 'inputCard');
      console.log("Componente card encontrado:", cardComponent); // Log 2
      if (cardComponent && cardComponent.options) {
        this.setOptionsForCardInput(cardComponent.options);
        this.changeDetectorRef.detectChanges();
      } else {
        console.log("Nenhum componente Dropdown ou opções encontradas"); // Log 3
      }
    });
  }

  private setOptionsForCardInput(options: any[]) {
    console.log("Definindo opções para Card:", options); // Log 4
    if (this.componentRef && this.componentRef.instance instanceof DynamicCardInputsComponent) {
      this.componentRef.instance.options = options;
      console.log("Opções definidas para o componente Dropdown"); // Log 5
    } else {
      console.log("ComponentRef é nulo ou não é uma instância de DynamicDropdownComponent"); // Log 6
    }
  }
}
