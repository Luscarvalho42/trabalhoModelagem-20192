import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadastro2Page } from './cadastro2.page';

describe('Cadastro2Page', () => {
  let component: Cadastro2Page;
  let fixture: ComponentFixture<Cadastro2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cadastro2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cadastro2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
