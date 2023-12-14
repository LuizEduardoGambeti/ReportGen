import {
  Component,
  ComponentFactoryResolver,
  Input,
  Type,
  ViewChild,
  AfterViewInit,
  ComponentRef,
  Output, EventEmitter
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
    private componentsDataService: ComponentsDataService
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
    };

    const componentToLoad = componentMap[this.componentType as keyof typeof componentMap];
    if (componentToLoad) {

      const factory = this.componentFactoryResolver.resolveComponentFactory(componentToLoad);
      this.componentRef = viewContainerRef.createComponent(factory);

      this.componentRef.instance.value = this.value;
      this.componentRef.instance.onValueChange.subscribe(this.handleValueChange.bind(this));

      if (componentToLoad === DynamicRadioButtonComponent ) {
        this.loadOptionsForRadioButton();
        this.loadOptionsForDropdown();
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
  public loadOptionsForDropdown ( ) {
    this.componentsDataService.getData().subscribe(components => {
      const dropdowncomponent = components.find(c => c.tipoComponente === 'dropDown');
      console.log(dropdowncomponent)
      console.log(dropdowncomponent.options)
      if (dropdowncomponent && dropdowncomponent.options) {
        this.setOptionsForDropdown(dropdowncomponent.options);
      }
    });
    console.log(this.componentsDataService.getData())
  }
  private setOptionsForDropdown(options: any[]) {
    if (this.componentRef && this.componentRef.instance instanceof DynamicDropdownComponent) {
      this.componentRef.instance.options = options;
    }
  }
}
