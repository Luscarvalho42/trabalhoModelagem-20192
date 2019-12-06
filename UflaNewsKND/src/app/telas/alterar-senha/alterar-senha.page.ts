import { Component, OnInit } from '@angular/core';
import { ServicoUsuario } from 'src/app/services/usuario.service';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.page.html',
  styleUrls: ['./alterar-senha.page.scss'],
})
export class AlterarSenhaPage implements OnInit {

  senhaAtual: string;
  novaSenha: string;
  confirmacao: string;

  constructor(
    public usuarios: ServicoUsuario,
    public toast: ToastService,
    public router: Router
    ) { }

  ngOnInit() {
  }

  async alterarSenha() {    
    var usuario = await this.usuarios.pegarLogado();

    if(this.confirmacao == this.novaSenha) {

      if(this.senhaAtual == usuario.senha) {
        
        this.usuarios.atualizarSenha(this.novaSenha);
        this.router.navigate(['tabs/perfil']);
      } else {

        this.toast.mensagem('Senha incorreta');
      }
    } else {
      this.toast.mensagem('A senha de confirmação não confere');
    }
  }
}
