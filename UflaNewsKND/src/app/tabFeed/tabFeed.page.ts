import { Component } from '@angular/core';
import { ModeloNoticia } from '../model/noticia.model';
import { ModeloPublicador } from '../model/publicador.model';
import { ModeloTopico } from '../model/topico.model';
import { ModeloComentario } from '../model/comentario.model';

@Component({
  selector: 'app-tabFeed',
  templateUrl: 'tabFeed.page.html',
  styleUrls: ['tabFeed.page.scss']
})
export class TabFeedPage {

  noticia: ModeloNoticia;

  constructor() {
    this.noticia = new ModeloNoticia(
      "https://ufla.br/images/noticias/2019/09_set/Bem_me_quero_bem_te_quero_12.png",
      new ModeloPublicador("Portal UFLA", "https://ufla.br/templates/portalufla/images/ufla-logo.png"),
      "Setembro Amarelo: Bem me quero, bem te quero",
      42,
      "krenpgiernine´bp´bei eirgiugrbivbéer biru eriugbepabguperav ure uregpeu",
      new ModeloTopico("Açoes da campanha", "lkjmnerpoibh eugbo erug reuioghroe gerigh"),
      new Date("25/05/2001"),
      new ModeloComentario("Renato Azevedo", "Adorei o tema e a campanha!"),
      );
  }
}