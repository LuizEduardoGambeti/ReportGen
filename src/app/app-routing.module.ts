import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginCadastroComponent} from "./login/login-cadastro/login-cadastro.component";
import {CadastroRelatorioTelaComponent} from "./cadastro-relatorio-tela/cadastro-relatorio-tela.component";

const routes: Routes = [
  {path: 'login', component: LoginCadastroComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'cadastro/relatorio', component: CadastroRelatorioTelaComponent},
  {path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
