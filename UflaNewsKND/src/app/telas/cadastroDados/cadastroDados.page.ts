import { Component, OnInit } from '@angular/core';
import { ServicoUsuario } from 'src/app/services/usuario.service';
import { ModeloUsuario } from 'src/app/model/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastroDados',
  templateUrl: './cadastroDados.page.html',
  styleUrls: ['./cadastroDados.page.scss'],
})
export class CadastroDadosPage implements OnInit {

  nome: string = "";
  email: string = "";
  senha: string = "";
  confirmarSenha: string = "";
  usuario: ModeloUsuario[];

  erroNome: boolean;
  erroEmail: boolean;
  erroSenha: boolean;

  constructor(
    public usuarios: ServicoUsuario,
    public router: Router
  ) { }

  async ngOnInit() {
  }

  async cadastrar() {
    this.erroEmail = false;
    this.erroNome = false;
    this.erroSenha = false;

    console.log("cadastrando");
    var cadastrar = true;

    this.usuario = await this.usuarios.pegarPeloNome(this.nome);
    if(this.usuario.length > 0) {
      this.erroNome = true;
      cadastrar = false;
    }

    this.usuario = await this.usuarios.pegarPeloEmail(this.email);
    if(this.usuario.length > 0) {
      this.erroEmail = true;
      cadastrar = false;
    }

    if(this.senha != this.confirmarSenha) {
      this.erroSenha = true;
      cadastrar = false;
    }

    if(this.nome == "" || this.email == "" || this.senha == "") {
      cadastrar = false;
    }

    if(cadastrar) {
      var id = await this.usuarios.proximoId();
      var likes = [];
      var inscricoes = [];

      var logado = new ModeloUsuario(id, this.nome, this.email, this.senha, likes, inscricoes);
      console.log(logado);
      this.usuarios.cadastrar(logado);
      this.usuarios.setUsuarioLogadoId(logado.id);
      this.router.navigate(['']);
    } else {
      this.ngOnInit();
    }

  }


}
