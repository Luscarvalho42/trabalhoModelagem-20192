import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModeloComentario } from '../model/comentario.model';
import 'rxjs/Rx';

const API_URL: string = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class ServicoComentario {

  constructor(public http: HttpClient) {
  }
  pegarComentarios(): Promise<ModeloComentario[]> {
    return this.http.get(`${API_URL}/comentario`).map(
      (itens: ModeloComentario[]) => {
        return itens.map(
          (item: ModeloComentario) => {
            return new ModeloComentario(
              item.id,
              item.boletimId,
              item.usuario,
              item.comentario,
              item.data
            );
          }
        )  
      }
    ).toPromise();
  }

  pegarComentariosDoBoletim(id: number, usuario: string): Promise<ModeloComentario[]> {
    return this.http.get(`${API_URL}/comentario?boletimId=${id}&usuario_ne=${usuario}`).map(
      (itens: ModeloComentario[]) => {
        return itens.map(
          (item: ModeloComentario) => {
            return new ModeloComentario(
              item.id,
              item.boletimId,
              item.usuario,
              item.comentario,
              item.data
            );
          }
        )  
      }
    ).toPromise();
  }

  pegarComentarioDoUsuario(boletim: number, usuario: string): Promise<ModeloComentario[]> {
    return this.http.get(`${API_URL}/comentario?boletimId=${boletim}&usuario=${usuario}`).map(
      (itens: ModeloComentario[]) => {
        return itens.map(
          (item: ModeloComentario) => {
            return new ModeloComentario(
              item.id,
              item.boletimId,
              item.usuario,
              item.comentario,
              item.data
            );
          }
        )  
      }
    ).toPromise();
  }

  salvarComentario(salvar: ModeloComentario): Promise<number> {
    const dados: any = {
      id: salvar.id,
      boletimId: salvar.boletimId,
      usuario: salvar.usuario,
      comentario: salvar.comentario,
      data: salvar.data
    }

    return this.http.post(`${API_URL}/comentario`, dados).map(
      (comentario: ModeloComentario) => comentario.id
    ).toPromise();
  }

  async proximoId(): Promise<number> {
    const comentarios = await this.pegarComentarios();

    return comentarios[comentarios.length-1].id + 1;
  }

  apagarPeloId(id: number) {
    return this.http.delete(`${API_URL}/comentario/${id}`).toPromise();
  }

}
