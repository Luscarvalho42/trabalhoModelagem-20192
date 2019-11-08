import { Injectable } from '@angular/core';
import { ModeloBoletim } from '../model/boletim.model';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

const API_URL: string = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class ServicoBoletim {

  constructor(public http: HttpClient) {
  }
  
  pegarTodos(): Promise<ModeloBoletim[]> {
    return this.http.get(`${API_URL}/boletim`).map(
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

  pegarPeloId(id: number): Promise<ModeloBoletim> {
    return this.http.get(`${API_URL}/boletim/${id}`).map(
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
    ).toPromise();
  }

  buscarPorTitulo(titulo: string): Promise<ModeloBoletim[]> {
    titulo = titulo.trim().toLowerCase();

    if (titulo == '') {
      return this.pegarTodos();
    }

    return this.http.get(`${API_URL}/boletim?q=${titulo}`).map(
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
