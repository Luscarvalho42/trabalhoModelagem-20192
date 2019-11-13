import { Component, OnInit } from '@angular/core';
import { ServicoUsuario } from 'src/app/services/usuario.service';
import { ModeloUsuario } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})

export class PerfilPage implements OnInit {

  id: number;
  usuarioLogado: ModeloUsuario;

  constructor(public usuario: ServicoUsuario) {
  }

  async ionViewDidEnter() {
    this.id = 1;
    this.usuarioLogado = await this.usuario.pegarPeloId(this.id);
  }

  ngOnInit() {
  }

}