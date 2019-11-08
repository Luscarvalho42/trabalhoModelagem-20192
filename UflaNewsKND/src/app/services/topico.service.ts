import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { ModeloBoletim } from '../model/boletim.model';
import { ModeloSecoes } from '../model/secoes.model';

const API_URL: string = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class ServicoTopico {
  listaTopico: ModeloSecoes[];

  constructor(public http: HttpClient) {
  }
  
  getTopicos(id: number): Promise<ModeloBoletim[]> {
    return this.http.get(`${API_URL}/topico?id=${id}`).map(
      (itens: ModeloBoletim[]) => {
        return itens.map(
          (item: ModeloBoletim) => {
            return new ModeloBoletim(
              item.id,
              item.capa,
              item.titulo,
              item.publicadoEm,
              item.conteudo,
              item.likes,
              item.publicadorId
            );
          }
        )  
      }
    ).toPromise();
  }

}
