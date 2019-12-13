import { Component, OnInit } from '@angular/core';
import { ModeloBoletim } from 'src/app/model/boletim.model';
import { ServicoBoletim } from 'src/app/services/boletim.service';
import { ModeloPublicador } from 'src/app/model/publicador.model';
import { ServicoPublicador } from 'src/app/services/publicador.service';
import { ServicoUsuario } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})

export class FeedPage implements OnInit {

  listaBoletimPesquisa: ModeloBoletim[];
  listaBoletim: ModeloBoletim[];
  listaPublicadores: ModeloPublicador[];

  constructor(
    public boletins: ServicoBoletim,
    public publicadores: ServicoPublicador,
    public usuarios: ServicoUsuario
    ) {
  }

  listar(event: any) {
  }

  async ionViewDidEnter() {
    this.listaBoletim = [];
    this.listaPublicadores = await this.publicadores.pegarTodos();

    var inscricoes = await this.usuarios.pegarInscricoes(this.usuarios.getId());
    for(let i = 0; i < inscricoes.length; i++) {
      var boletins = await this.boletins.pegarPeloPublicador(inscricoes[i]);
      for(let j = 0; j < boletins.length; j++) {
        this.listaBoletim.unshift(boletins[j]);
      }
    }
  }

  async atualizarLista(event: any) {
    this.listaBoletim = await this.boletins.buscarPorTitulo(event.target.value);
    if(event.target.value == "") {
      this.ionViewDidEnter()
    }
  }

  ngOnInit() {
  }
}




