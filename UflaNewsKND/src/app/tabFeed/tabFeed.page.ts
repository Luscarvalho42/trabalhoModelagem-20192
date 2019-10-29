import { Component } from '@angular/core';
import { ModeloNoticia } from '../model/noticia.model';

@Component({
  selector: 'app-tabFeed',
  templateUrl: 'tabFeed.page.html',
  styleUrls: ['tabFeed.page.scss']
})
export class TabFeedPage {

  noticia: ModeloNoticia;

  constructor() {
    this.noticia = new ModeloNoticia(
      "Portal UFLA",
      "Setembro Amarelo: Bem me quero, bem te quero",
      42,
      new Date("25/05/2001"),
      "krenpgiernine´bp´bei eirgiugrbivbéer biru eriugbepabguperav ure uregpeu",
      "https://ufla.br/images/noticias/2019/09_set/Bem_me_quero_bem_te_quero_12.png"
    );
  }
}