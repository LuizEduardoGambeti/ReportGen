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
import { ComponentsDataService } from "../dynamic-data/components-data.service";
import { DynamicCardInputsComponent } from "../dynamic-card-inputs/dynamic-card-inputs.component";
import {DynamicTitleComponent} from "../dynamic-title/dynamic-title.component";

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
    console.log("DynamicContainerComponent: ngAfterViewInit - ViewContainerRef definido");
    this.loadComponent();
  }

  public handleValueChange(newValue: string) {
    this.onValueChange.emit(newValue);
    console.log("DynamicContainerComponent: handleValueChange - Novo valor emitido:", newValue);
  }

  public loadComponent() {
    console.log("DynamicContainerComponent: loadComponent - Iniciando com tipo:", this.componentType);
    const viewContainerRef = this.anchorService.viewContainerRef;
    if (!viewContainerRef) {
      console.error('DynamicContainerComponent: loadComponent - ViewContainerRef é nulo');
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
      inputCard: DynamicCardInputsComponent,
      title: DynamicTitleComponent
    };

    const componentToLoad = componentMap[this.componentType];
    if (componentToLoad) {
      const factory = this.componentFactoryResolver.resolveComponentFactory(componentToLoad);
      this.componentRef = viewContainerRef.createComponent(factory);
      this.componentRef.instance.value = this.value;
      this.changeDetectorRef.detectChanges();

      this.componentRef.instance.onValueChange.subscribe(this.handleValueChange.bind(this));

      if (componentToLoad === DynamicRadioButtonComponent) {
        this.loadOptionsForRadioButton();
      } else if (componentToLoad === DynamicDropdownComponent) {
        this.loadOptionsForDropdown();
      }
      else if (componentToLoad === DynamicInputComponent){
        this.loadOptionsForInput();
      }
      else if (componentToLoad === DynamicInputNumberComponent){
        this.loadOptionsForInputNumber();
      }
      else if (componentToLoad === DynamicDatePickerComponent){
        this.loadOptionsForDatePicker();
      }
      else if (componentToLoad === DynamicTitleComponent){
        this.loadOptionsForTitle();
      }
    } else {
      console.error("DynamicContainerComponent: loadComponent - Nenhum componente mapeado para o tipo:", this.componentType);
    }
  }

  private loadOptionsForRadioButton() {
    this.componentsDataService.getData().subscribe(components => {
      const radioButtonComponent = components.find(c => c.tipoComponente === 'radioButton');
      console.log("DynamicContainerComponent: loadOptionsForRadioButton - Componente RadioButton encontrado:", radioButtonComponent);
      if (radioButtonComponent && radioButtonComponent.options) {
        this.setOptionsForRadioButton(radioButtonComponent.options);
      }
    });
  }

  private setOptionsForRadioButton(options: any[]) {
    if (this.componentRef && this.componentRef.instance instanceof DynamicRadioButtonComponent) {
      this.componentRef.instance.options = options;
      console.log("DynamicContainerComponent: setOptionsForRadioButton - Opções definidas para RadioButton");
    }
  }

  public loadOptionsForDropdown() {
    this.componentsDataService.getData().subscribe(components => {
      console.log("DynamicContainerComponent: loadOptionsForDropdown - Componentes recebidos:", components);
      const dropdownComponent = components.find(c => c.tipoComponente === 'dropDown');
      console.log("DynamicContainerComponent: loadOptionsForDropdown - Componente Dropdown encontrado:", dropdownComponent);
      if (dropdownComponent && dropdownComponent.options) {
        this.setOptionsForDropdown(dropdownComponent.options);
      }
    });
  }

  private setOptionsForDropdown(options: any[]) {
    if (this.componentRef && this.componentRef.instance instanceof DynamicDropdownComponent) {
      this.componentRef.instance.options = options;
      console.log("DynamicContainerComponent: setOptionsForDropdown - Opções definidas para Dropdown");
    }
  }
  private loadOptionsForInput() {
    this.componentsDataService.getData().subscribe(components => {
      const inputComponent = components.find(c => c.tipoComponente === 'input');
      if (inputComponent && inputComponent.options) {
        this.setOptionsForInput(inputComponent.options);
      }
    });
  }

  private setOptionsForInput(options: any[]) {
    if (this.componentRef && this.componentRef.instance instanceof DynamicInputComponent) {
      this.componentRef.instance.options = options;

    }
  }
  private loadOptionsForInputNumber() {
    this.componentsDataService.getData().subscribe(components => {
      const inputComponent = components.find(c => c.tipoComponente === 'number');
      if (inputComponent && inputComponent.options) {
        this.setOptionsForInputNumber(inputComponent.options);
      }
    });
  }

  private setOptionsForInputNumber(options: any[]) {
    if (this.componentRef && this.componentRef.instance instanceof DynamicInputNumberComponent) {
      this.componentRef.instance.options = options;
    }
  }
  private loadOptionsForDatePicker() {
    this.componentsDataService.getData().subscribe(components => {
      const inputComponent = components.find(c => c.tipoComponente === 'datePicker');
      if (inputComponent && inputComponent.options) {
        this.setOptionsForDatePicker(inputComponent.options);
      }
    });
  }

  private setOptionsForDatePicker(options: any[]) {
    if (this.componentRef && this.componentRef.instance instanceof DynamicDatePickerComponent) {
      this.componentRef.instance.options = options;
    }
  }
  private loadOptionsForTitle() {
    this.componentsDataService.getData().subscribe(components => {
      const inputComponent = components.find(c => c.tipoComponente === 'title');
      if (inputComponent && inputComponent.options) {
        this.setOptionsForTitle(inputComponent.options);
      }
    });
  }

  private setOptionsForTitle(options: any[]) {
    if (this.componentRef && this.componentRef.instance instanceof DynamicDatePickerComponent) {
      this.componentRef.instance.options = options;
    }
  }
}
