import { Component, OnInit } from '@angular/core';
import { ModeloBoletim } from 'src/app/model/boletim.model';
import { ServicoBoletim } from 'src/app/services/boletim.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})

export class FeedPage implements OnInit {

  listaBoletim: ModeloBoletim[];

  constructor(public boletins: ServicoBoletim,) {
  }

  listar(event: any) {
  }

  async ionViewDidEnter() {
    this.listaBoletim = await this.boletins.pegarTodos();
  }

  async atualizarLista(event: any) {
    this.listaBoletim = await this.boletins.buscarPorTitulo(event.target.value);
}


  ngOnInit() {
  }

}




