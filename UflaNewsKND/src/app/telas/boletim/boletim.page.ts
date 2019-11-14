import { Component, OnInit } from '@angular/core';
import { ModeloBoletim } from 'src/app/model/boletim.model';
import { ServicoBoletim } from 'src/app/services/boletim.service';
import { ActivatedRoute } from '@angular/router';
import { ModeloPublicador } from 'src/app/model/publicador.model';
import { AlertController } from '@ionic/angular';
import { ModeloComentario } from 'src/app/model/comentario.model';
import { ModeloSecoes } from 'src/app/model/secoes.model';
import { ServicoSecao } from 'src/app/services/topico.service';
import { ServicoPublicador } from 'src/app/services/publicador.service';

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
  listaComentarios: ModeloComentario[];

  constructor(public activatedRoute: ActivatedRoute,
    public servicoBoletim: ServicoBoletim,
    public controleAlerta: AlertController,
    public servicoSecao: ServicoSecao,
    public servicoPublicador: ServicoPublicador
  ) {}

  async ngOnInit() {
    
    this.boletimId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.boletimAtual = await this.servicoBoletim.pegarPeloId(this.boletimId);
    this.publicador = await this.servicoPublicador.pegarPeloId(this.boletimAtual.publicadorId);
    this.listaSecoes = await this.servicoSecao.pegarSecoesDoBoletim(this.boletimId)
    this.listaComentarios = [
      new ModeloComentario(
        1,
        1,
        "Marvin",
        "Muito legal, gostaria de ter a capacidade de fazer algo assim",
        "24/10/2019, 12:35"
      ),
      new ModeloComentario(
        2,
        1,
        "Pedro",
        "Supimpa. Parabens aos envolvidos!",
        "25/10/2019, 07:11"
      )
    ]
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
