import { Component, OnInit } from '@angular/core';
import { ServicoUsuario } from 'src/app/services/usuario.service';
import { ModeloUsuario } from 'src/app/model/usuario.model';
import { TabsPage } from 'src/app/tabs/tabs.page';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  mostrarErroValidacao: boolean;
  email: string = "";
  senha: string = "";
  usuario: ModeloUsuario[];
  
  constructor(
    public usuarios: ServicoUsuario,
    public router: Router,
    public toast: ToastService
    ) { }

  async ngOnInit() {
  }

  async fazerLogin() {
    this.usuario = await this.usuarios.pegarPeloEmail(this.email);

    if(this.usuario.length == 0) {
      this.toast.mensagem("Credenciais inválidas");
    } else {
      this.usuarios.setUsuarioLogadoId(this.usuario[0].id);

      if(this.usuario[0].senha == this.senha) {
        this.router.navigate(['']);
      }
    }
  }
}
