import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMensagemPage } from './cadastroMensagem.page';

describe('Cadastro3Page', () => {
  let component: CadastroMensagemPage;
  let fixture: ComponentFixture<CadastroMensagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroMensagemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroMensagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
