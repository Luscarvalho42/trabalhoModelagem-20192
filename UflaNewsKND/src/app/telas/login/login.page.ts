import { Component, OnInit } from '@angular/core';
import { ServicoUsuario } from 'src/app/services/usuario.service';
import { ModeloUsuario } from 'src/app/model/usuario.model';
import { TabsPage } from 'src/app/tabs/tabs.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  mostrarErroValidacao: boolean;
  email: string;
  senha: string;
  usuario: ModeloUsuario[];
  
  constructor(
    public usuarios: ServicoUsuario,
    public router: Router
    ) { }

  async ngOnInit() {
  }

  async fazerLogin() {
    this.usuario = await this.usuarios.pegarPeloEmail(this.email);
    console.log(this.usuario);

    if(this.usuario.length == 0) {
      this.mostrarErroValidacao = true;
    } else {
      this.usuarios.setUsuarioLogadoId(this.usuario[0].id);

      if(this.usuario[0].senha == this.senha) {
        console.log("LOGADO");
        this.router.navigate(['']);
      } else {
        this.mostrarErroValidacao = true;
      }
    }
  }
}
