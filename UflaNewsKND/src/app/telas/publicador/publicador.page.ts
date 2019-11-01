import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ServicoPublicador } from 'src/app/services/publicador.service';
import { ActivatedRoute } from '@angular/router';
import { ModeloBoletim } from 'src/app/model/boletim.model';
import { ModeloPublicador } from 'src/app/model/publicador.model';
import { ServicoBoletim } from 'src/app/services/boletim.service';
import { ModeloTopico } from 'src/app/model/topico.model';
import { ServicoTopico } from 'src/app/services/topico.service';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';

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
    //this.listaBoletins = await this.listar();
  }
/**
  listar(): Promise<ModeloBoletim[]> {
    return this.publicadorAtual.noticias.map(
      (id: number) => {
        return this.servicoBoletim.pegarPeloId(id);
      }
    );
  }
*/
  
}
