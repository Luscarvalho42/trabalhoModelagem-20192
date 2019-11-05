import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadastro1Page } from './cadastro1.page';

describe('Cadastro1Page', () => {
  let component: Cadastro1Page;
  let fixture: ComponentFixture<Cadastro1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cadastro1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cadastro1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
