import { Injectable } from '@angular/core';
import { ModeloBoletim } from '../model/boletim.model';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { ModeloPublicador } from '../model/publicador.model';

const API_URL: string = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class ServicoPublicador {

  constructor(public http: HttpClient) { 
  }

  pegarPeloId(id: number): Promise<ModeloPublicador> {
    return this.http.get(`${API_URL}/publicador/${id}`).map(
      (item: ModeloPublicador) => {
        return new ModeloPublicador(
          item.id,
          item.foto,
          item.nome
        );
      }
    ).toPromise();
  }

  pegarTodos(): Promise<ModeloPublicador[]> {
    return this.http.get(`${API_URL}/publicador`).map(
      (itens:ModeloPublicador[]) => {
        return itens.map(
          (item: ModeloPublicador) => {
            return new ModeloPublicador(
              item.id,
              item.foto,
              item.nome
            );
          }
        )
      }
    ).toPromise();
  }

  pegarIdTodos(): Promise<number[]> {
    return this.http.get(`${API_URL}/publicador`).map(
      (itens:ModeloPublicador[]) => {
        return itens.map(
          (item: ModeloPublicador) => {
            return item.id;
          }
        )
      }
    ).toPromise();
  }
}
