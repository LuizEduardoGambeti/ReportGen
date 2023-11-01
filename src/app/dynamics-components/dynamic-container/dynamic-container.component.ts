import { Component, ComponentFactoryResolver, Input, OnInit, Type, ViewChild, AfterViewInit } from '@angular/core';
import { DynamicUploadComponent } from "../dynamic-upload/dynamic-upload.component";
import { DynamicDatePickerComponent } from "../dynamic-date-picker/dynamic-date-picker.component";
import { AnchorService } from "../anchor/anchor.service";
import { AnchorDirective } from "../anchor/anchor.directive";
import {DynamicCardComponent} from "../dynamic-card/dynamic-card.component";
import {DynamicDropdownComponent} from "../dynamic-dropdown/dynamic-dropdown.component";
import {DynamicInputComponent} from "../dynamic-input/dynamic-input.component";
import {DynamicInputNumberComponent} from "../dynamic-input-number/dynamic-input-number.component";
import {DynamicRadioButtonComponent} from "../dynamic-radio-button/dynamic-radio-button.component";  // Importe a diretiva appAnchor

// ... Importe todos os outros componentes aqui

@Component({
    selector: 'app-dynamic-container',
    templateUrl: './dynamic-container.component.html'
})
export class DynamicContainerComponent implements OnInit, AfterViewInit {
    @Input() componentType!: string;

    @ViewChild(AnchorDirective, {static: false}) appAnchor!: AnchorDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private anchorService: AnchorService) { }

    public ngOnInit() {
        // deixamos a inicialização do componente para ngAfterViewInit, uma vez que precisamos garantir
        // que o viewContainerRef esteja disponível
    }

    ngAfterViewInit() {
        this.anchorService.viewContainerRef = this.appAnchor.viewContainerRef;
        this.loadComponent();
    }

    public loadComponent() {
        const viewContainerRef = this.anchorService.viewContainerRef;
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
            if (viewContainerRef) {
                viewContainerRef.clear();
                viewContainerRef.createComponent(factory);
            }
        }
    }
}
