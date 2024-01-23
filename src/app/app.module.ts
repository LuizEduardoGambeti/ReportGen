import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginCadastroComponent} from './login/login-cadastro/login-cadastro.component';
import {LoginFormComponent} from './login/login-form/login-form/login-form.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CadastroRelatorioTelaComponent} from './cadastro-relatorio-tela/cadastro-relatorio-tela.component';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {en_US} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzCollapseModule} from "ng-zorro-antd/collapse";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzInputModule} from "ng-zorro-antd/input";
import {CollapseCadastroItensComponent} from './collapse-cadastro-itens/collapse-cadastro-itens.component';
import {LayoutFormaterComponent} from './layout-formater/layout-formater.component';
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {DynamicInputComponent} from './dynamics-components/dynamic-input/dynamic-input.component';
import {DynamicDatePickerComponent} from './dynamics-components/dynamic-date-picker/dynamic-date-picker.component';
import {DynamicUploadComponent} from './dynamics-components/dynamic-upload/dynamic-upload.component';
import {DynamicDropdownComponent} from './dynamics-components/dynamic-dropdown/dynamic-dropdown.component';
import {DynamicInputNumberComponent} from './dynamics-components/dynamic-input-number/dynamic-input-number.component';
import {DynamicRadioButtonComponent} from './dynamics-components/dynamic-radio-button/dynamic-radio-button.component';
import {AnchorDirective} from './dynamics-components/anchor/anchor.directive';
import {DynamicContainerComponent} from './dynamics-components/dynamic-container/dynamic-container.component';
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzUploadModule} from "ng-zorro-antd/upload";
import {DynamicCardComponent} from './dynamics-components/dynamic-card/dynamic-card.component';
import {ComponentsDataService} from "./dynamics-components/dynamic-data/components-data.service";
import { DashboardCardComponent } from './dynamics-components/dashboard-card/dashboard-card.component';
import { GenericPageLayoutContainerComponent } from './generic-page-layout-container/generic-page-layout-container.component';
import { DynamicCardInputsComponent } from './dynamics-components/dynamic-card-inputs/dynamic-card-inputs.component';
import {NzTypographyModule} from "ng-zorro-antd/typography";
import { DynamicTitleComponent } from './dynamics-components/dynamic-title/dynamic-title.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginCadastroComponent,
    LoginFormComponent,
    DashboardComponent,
    CadastroRelatorioTelaComponent,
    CollapseCadastroItensComponent,
    LayoutFormaterComponent,
    DynamicInputComponent,
    DynamicDatePickerComponent,
    DynamicUploadComponent,
    DynamicDropdownComponent,
    DynamicInputNumberComponent,
    DynamicRadioButtonComponent,
    AnchorDirective,
    DynamicContainerComponent,
    DynamicCardComponent,
    DashboardCardComponent,
    GenericPageLayoutContainerComponent,
    DynamicCardInputsComponent,
    DynamicContainerComponent,
    DynamicTitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzCollapseModule,
    NzIconModule,
    NzSpaceModule,
    NzInputModule,
    NzModalModule,
    NzCardModule,
    NzDividerModule,
    NzRadioModule,
    NzInputNumberModule,
    NzDatePickerModule,
    NzDropDownModule,
    NzSelectModule,
    NzUploadModule,
    NzTypographyModule
  ],
  providers: [ComponentsDataService,
    {provide: NZ_I18N, useValue: en_US}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
