import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ServicoPublicador } from 'src/app/services/publicador.service';
import { ActivatedRoute } from '@angular/router';
import { ModeloBoletim } from 'src/app/model/boletim.model';
import { ModeloPublicador } from 'src/app/model/publicador.model';
import { ServicoBoletim } from 'src/app/services/boletim.service';

@Component({
  selector: 'app-publicador',
  templateUrl: './publicador.page.html',
  styleUrls: ['./publicador.page.scss'],
})
export class PublicadorPage implements OnInit {
  
  publicadorId: number;
  publicadorAtual: ModeloPublicador;
  listaBoletins: ModeloBoletim[];

  constructor(
    public activatedRoute: ActivatedRoute,
    public servicoPublicador: ServicoPublicador,
    public servicoBoletim: ServicoBoletim
  ) { }

  async ngOnInit() {

    this.publicadorId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.publicadorAtual = await this.servicoPublicador.pegarPeloId(this.publicadorId);

    this.listaBoletins = await this.servicoBoletim.pegarPeloPublicador(this.publicadorId);
  }
  
}
