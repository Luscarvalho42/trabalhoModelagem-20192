import { Component, OnInit } from '@angular/core';
import { ServicoUsuario } from 'src/app/services/usuario.service';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alterar-email',
  templateUrl: './alterar-email.page.html',
  styleUrls: ['./alterar-email.page.scss'],
})
export class AlterarEmailPage implements OnInit {
  email: string;
  senha: string;

  constructor(
    public usuarios: ServicoUsuario,
    public toast: ToastService,
    public router: Router
    ) { }

  ngOnInit() {
  }

  async alterarEmail() {
    var usuario = await this.usuarios.pegarLogado();

    var conferirEmail = await this.usuarios.pegarPeloEmail(this.email);
    
    if(conferirEmail.length == 0) {

      if(this.senha == usuario.senha) {
        
        this.usuarios.atualizarEmail(this.email);
        this.router.navigate(['tabs/perfil']);
      } else {

        this.toast.mensagem('Senha incorreta');
      }
    } else {
      this.toast.mensagem('Email já está em uso');
    }
  }

}
