import { Component, OnInit } from '@angular/core';
import { ServicoUsuario } from 'src/app/services/usuario.service';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alterar-nome',
  templateUrl: './alterar-nome.page.html',
  styleUrls: ['./alterar-nome.page.scss'],
})
export class AlterarNomePage implements OnInit {

  nome: string;
  senha: string;

  constructor(
    public usuarios: ServicoUsuario,
    public toast: ToastService,
    public router: Router
    ) { }

  ngOnInit() {
  }

  async alterarNome() {
    var usuario = await this.usuarios.pegarLogado();

    var conferirNome = await this.usuarios.pegarPeloNome(this.nome);
    
    if(conferirNome.length == 0) {

      if(this.senha == usuario.senha) {
        
        this.usuarios.atualizarNome(this.nome);
        this.router.navigate(['tabs/perfil']);
      } else {

        this.toast.mensagem('Senha incorreta');
      }
    } else {
      this.toast.mensagem('Nome já está em uso');
    }
  }
}
