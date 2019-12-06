import { Component, OnInit } from '@angular/core';
import { ServicoUsuario } from 'src/app/services/usuario.service';
import { ModeloUsuario } from 'src/app/model/usuario.model';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

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

  constructor(
    public usuarios: ServicoUsuario,
    public router: Router,
    public toast: ToastService
  ) { }

  async ngOnInit() {
  }

  async cadastrar() {
    console.log("cadastrando");
    var cadastrar = true;

    this.usuario = await this.usuarios.pegarPeloNome(this.nome);
    if(this.usuario.length > 0) {
      this.toast.mensagem("Esse nome já está em uso");
      cadastrar = false;
    }

    this.usuario = await this.usuarios.pegarPeloEmail(this.email);
    if(this.usuario.length > 0) {
      this.toast.mensagem("Esse email já está em uso");
      cadastrar = false;
    }

    if(this.senha != this.confirmarSenha) {
      this.toast.mensagem("A senha de confirmação não confere");
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
