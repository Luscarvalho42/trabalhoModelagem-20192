import { Injectable } from '@angular/core';
import { ModeloTopico } from '../model/topico.model';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { ModeloBoletim } from '../model/boletim.model';

const API_URL: string = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class ServicoTopico {
  listaTopico: ModeloTopico[];

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
              item.publicadorImagem,
              item.publicadorNome,
              item.publicadorId
            );
          }
        )  
      }
    ).toPromise();
  }

}
