import { Component, OnInit } from '@angular/core';
import { ServicoUsuario } from 'src/app/services/usuario.service';
import { ModeloUsuario } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  ngOnInit(): void {
  }

  usuariosCadastrados: ModeloUsuario[];

  constructor(public usuarios: ServicoUsuario) { }

  async validar() {
    this.usuariosCadastrados = await this.usuarios.pegarTodos();
  }
}
