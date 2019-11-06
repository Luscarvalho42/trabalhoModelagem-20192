import { Component, OnInit } from '@angular/core';
import { ModeloBoletim } from 'src/app/model/boletim.model';
import { ServicoBoletim } from 'src/app/services/boletim.service';
import { ActivatedRoute } from '@angular/router';
import { ModeloTopico, ModeloSecoes } from 'src/app/model/secoes.model';
import { ServicoTopico } from 'src/app/services/topico.service';
import { ModeloPublicador } from 'src/app/model/publicador.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-boletim',
  templateUrl: './boletim.page.html',
  styleUrls: ['./boletim.page.scss'],
})

export class BoletimPage implements OnInit {

  boletimAtual: ModeloBoletim;
  boletimId: number;
  publicador: ModeloPublicador;
  listaSecoes: ModeloSecoes[];

  constructor(public activatedRoute: ActivatedRoute,
    public servicoBoletim: ServicoBoletim,
    public servicoTopico: ServicoTopico,
    public controleAlerta: AlertController
  ) {}

  async ngOnInit() {
    this.boletimId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

    this.boletimAtual = new ModeloBoletim(
      1,
      "https://ufla.br/images/noticias/2019/10_out/embalagem_tomate_DCA.jpg",
      "Pesquisa utiliza casca de tomate para produzir embalagem antioxidante",
      "24/10/2019",
      "Na UFLA, diversos laboratórios de diferentes cursos têm buscado em fontes renováveis novas opções de embalagens biodegradáveis, sejam elas ativas, inteligentes ou blendas. Há mais de 13 anos, novas embalagens para alimentos têm sido alvo de diversas pesquisas no Laboratório de Embalagens do Departamento de Ciência dos Alimentos (DCA). Para a professora Soraia Vilela Borges, no futuro as embalagens  deverão ser as “blendas ou compósitos ativos e inteligentes”, ou seja, embalagens que trazem consigo diversas funções e materiais com propriedades antimicrobianas e resistência térmica, por exemplo",
      42,
      1
    );

    this.publicador = new ModeloPublicador(
      1,
      [1, 2],
      "https://images.educamaisbrasil.com.br/content/superior/instituicao/logo/g/ufla.png",
      "Portal UFLA"
    );

    this.listaSecoes = [
      new ModeloSecoes(
        1,
        "Vídeo",
        "https://youtu.be/MgaDhF4XxJw",
        "logo-youtube"
      ),
      new ModeloSecoes(
        2,
        "Reportagem por:",
        "Karina Mascarenhas, jornalista - bolsista Dcom/Fapemig",
        "search"
      )
    ];
  }

  async mostrarSecao(s: ModeloSecoes) {
    const secao = await this.controleAlerta.create({
      header: s.titulo,
      subHeader: "",
      message: s.conteudo,
      buttons: ['OK']
    });

    await secao.present();
    let resultado = await secao.onDidDismiss();
  }
}
