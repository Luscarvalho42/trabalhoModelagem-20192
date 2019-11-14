import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { ModeloBoletim } from '../model/boletim.model';
import { ModeloSecoes } from '../model/secoes.model';

const API_URL: string = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class ServicoSecao {
  listaSecao: ModeloSecoes[];

  constructor(public http: HttpClient) {
  }
  
  pegarSecoesDoBoletim(id: number): Promise<ModeloSecoes[]> {
    return this.http.get(`${API_URL}/secao?boletimId=${id}`).map(
      (itens: ModeloSecoes[]) => {
        return itens.map(
          (item: ModeloSecoes) => {
            return new ModeloSecoes(
              item.id,
              item.boletimId,
              item.titulo,
              item.conteudo,
              item.icone
            );
          }
        )  
      }
    ).toPromise();
  }

}
