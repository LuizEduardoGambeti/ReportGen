import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroRelatorioTelaComponent } from './cadastro-relatorio-tela.component';

describe('CadastroRelatorioTelaComponent', () => {
  let component: CadastroRelatorioTelaComponent;
  let fixture: ComponentFixture<CadastroRelatorioTelaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroRelatorioTelaComponent]
    });
    fixture = TestBed.createComponent(CadastroRelatorioTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
