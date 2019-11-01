import { Injectable } from '@angular/core';
import { ModeloUsuario } from '../model/usuario.model';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

const API_URL: string = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class ServicoUsuario {

  usuario: ModeloUsuario;

  constructor(public http: HttpClient) {
  }
  
  getDados(id: number): Promise<ModeloUsuario> {
    return this.http.get(`${API_URL}/usuario/${id}`).map(
      (item: ModeloUsuario) => {
        return new ModeloUsuario(
          item.id,
          item.nome,
          item.email,
          item.senha,
          item.likes,
          item.inscricoes
        );
      }
    ).toPromise();
  }

  getInscricoes(id:number): Promise<number[]> {
    return this.http.get(`${API_URL}/usuario/${id}`).map(
      (item: ModeloUsuario) => {
        return item.inscricoes;
      }
    ).toPromise();
  }

  pegarPeloId(id: number): Promise<ModeloUsuario> {
    return this.http.get(`${API_URL}/usuario/${id}`).map(
      (item: ModeloUsuario) => {
        return new ModeloUsuario(
          item.id,
          item.nome,
          item.email,
          item.senha,
          item.likes,
          item.inscricoes
        );
      }
    ).toPromise();
  }
}
