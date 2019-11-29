import { Component, OnInit } from '@angular/core';
import { ServicoUsuario } from 'src/app/services/usuario.service';
import { ModeloUsuario } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  mostrarErroValidacao: boolean;
  email: string;
  senha: string;
  usuario: ModeloUsuario;
  
  constructor(public usuarios: ServicoUsuario) { }

  async ngOnInit() {
    this.usuario = await this.usuarios.pegarPeloEmail(this.email);
  }

  async fazerLogin() {
    this.usuario = await this.usuarios.pegarPeloEmail(this.email);
    console.log(this.usuario.nome);
  }
}
