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

    this.listaBoletins = [
      new ModeloBoletim(
        1,
        "https://ufla.br/images/noticias/2019/10_out/embalagem_tomate_DCA.jpg",
        "Pesquisa utiliza casca de tomate para produzir embalagem antioxidante",
        "22/10/2019",
        "Na UFLA, diversos laboratórios de diferentes cursos têm buscado em fontes renováveis novas opções de embalagens biodegradáveis, sejam elas ativas, inteligentes ou blendas. Há mais de 13 anos, novas embalagens para alimentos têm sido alvo de diversas pesquisas no Laboratório de Embalagens do Departamento de Ciência dos Alimentos (DCA). Para a professora Soraia Vilela Borges, no futuro as embalagens  deverão ser as “blendas ou compósitos ativos e inteligentes”, ou seja, embalagens que trazem consigo diversas funções e materiais com propriedades antimicrobianas e resistência térmica, por exemplo.",
        42,
        1
      ),
      new ModeloBoletim(
        2,
        "https://ufla.br/images/noticias/2019/selos/pas_2019.JPG",
        "Abertas as inscrições para equipe de aplicação do PAS",
        "24/10/2019",
        "A Diretoria de Processos Seletivos da Universidade Federal de Lavras (Dips/UFLA) comunica que já estão abertas as inscrições para interessados em aplicar as provas do Processo de Avaliação Seriada (PAS 2019/UFLA). A aplicação ocorrerá nos dias 23/11 e 24/11",
        63,
        1
      )
    ]
  }
  
}
