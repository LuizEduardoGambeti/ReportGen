import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginCadastroComponent } from './login/login-cadastro/login-cadastro.component';
import { LoginFormComponent } from './login/login-form/login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CadastroRelatorioTelaComponent } from './cadastro-relatorio-tela/cadastro-relatorio-tela.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzCollapseModule} from "ng-zorro-antd/collapse";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzInputModule} from "ng-zorro-antd/input";
import { CollapseCadastroItensComponent } from './collapse-cadastro-itens/collapse-cadastro-itens.component';
import { LayoutFormaterComponent } from './layout-formater/layout-formater.component';
import { ModalSelectItemsComponent } from './modal-select-items/modal-select-items.component';

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
    ModalSelectItemsComponent
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
    NzInputModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
