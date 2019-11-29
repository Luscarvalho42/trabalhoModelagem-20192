import { Component, OnInit } from '@angular/core';
import { ServicoUsuario } from 'src/app/services/usuario.service';
import { ModeloUsuario } from 'src/app/model/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})

export class PerfilPage implements OnInit {

  id: number;
  usuarioLogado: ModeloUsuario;

  constructor(
    public usuario: ServicoUsuario,
    public router: Router
    ) {
  }

  async ionViewDidEnter() {
    this.id = 1;
    this.usuarioLogado = await this.usuario.pegarPeloId(this.id);
  }

  ngOnInit() {
  }

  sair() {
    this.usuario.setUsuarioLogadoId(-1);
    this.router.navigate(['login']);
  }
}