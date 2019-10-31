import { Component, OnInit } from '@angular/core';
import { ModeloBoletim } from 'src/app/model/boletim.model';
import { ServicoBoletim } from 'src/app/services/boletim.service';
import { ActivatedRoute } from '@angular/router';
import { ModeloTopico } from 'src/app/model/topico.model';
import { ServicoTopico } from 'src/app/services/topico.service';

@Component({
  selector: 'app-boletim',
  templateUrl: './boletim.page.html',
  styleUrls: ['./boletim.page.scss'],
})

export class BoletimPage implements OnInit {

  boletimAtual: ModeloBoletim;
  boletimId: number;
  teste: number;
  listaTopicos: ModeloTopico[];

  constructor(public activatedRoute: ActivatedRoute, public servicoBoletim: ServicoBoletim, public servicoTopico: ServicoTopico) {
  }

  async ngOnInit() {
    this.boletimId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.teste = this.boletimId;
    this.boletimAtual = await this.servicoBoletim.pegarPeloId(this.boletimId);
    this.listaTopicos = await this.servicoTopico.getTopicos(this.boletimId);
  }

}
