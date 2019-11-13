import { Component, OnInit } from '@angular/core';
import { ModeloBoletim } from 'src/app/model/boletim.model';
import { ServicoBoletim } from 'src/app/services/boletim.service';
import { ModeloPublicador } from 'src/app/model/publicador.model';
import { ServicoPublicador } from 'src/app/services/publicador.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})

export class FeedPage implements OnInit {

  listaBoletim: ModeloBoletim[];
  listaPublicadores: ModeloPublicador[];

  constructor(public boletins: ServicoBoletim, public publicadores: ServicoPublicador) {
  }

  listar(event: any) {
  }

  async ionViewDidEnter() {
    this.listaBoletim = await this.boletins.pegarTodos();
    this.listaPublicadores = await this.publicadores.pegarTodos();
  }

  async atualizarLista(event: any) {
    this.listaBoletim = await this.boletins.buscarPorTitulo(event.target.value);
  }


  ngOnInit() {
  }

}




