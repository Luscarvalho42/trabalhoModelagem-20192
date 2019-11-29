import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastroDados',
  templateUrl: './cadastroDados.page.html',
  styleUrls: ['./cadastroDados.page.scss'],
})
export class CadastroDadosPage implements OnInit {

  nome: string;
  email: string;
  senha: string;
  confirmSenha: string;

  constructor() { }

  ngOnInit() {
  }

}
