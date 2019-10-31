import { Component, OnInit } from '@angular/core';
import { ModeloBoletim } from 'src/app/model/boletim.model';
import { ServicoBoletim } from 'src/app/servicos/boletim.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boletim',
  templateUrl: './boletim.page.html',
  styleUrls: ['./boletim.page.scss'],
})

export class BoletimPage implements OnInit {

  boletimAtual: ModeloBoletim;
  boletimId: number;

  constructor(public activatedRoute: ActivatedRoute, public servicoBoletim: ServicoBoletim) {
  }

  async ngOnInit() {
    this.boletimId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

    this.boletimAtual = await this.servicoBoletim.pegarPeloId(this.boletimId);
  }
}
