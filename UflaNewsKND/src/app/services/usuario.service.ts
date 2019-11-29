import { Injectable } from '@angular/core';
import { ModeloUsuario } from '../model/usuario.model';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

const API_URL: string = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class ServicoUsuario {

  usuarioLogadoId: number = -1;
  usuarioLogadoEmail: string = "";

  constructor(public http: HttpClient) {
  }

  setUsuarioLogadoId(id: number) {
    this.usuarioLogadoId = id;
  }
  
  cadastrar(cadastrar: ModeloUsuario) {
  }

  pegarInscricoes(id:number): Promise<number[]> {
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

  getEmail() {
    return this.usuarioLogadoEmail;
  }

  getId() {
    return this.usuarioLogadoId;
  }

  pegarPeloEmail(email: string): Promise<ModeloUsuario[]> {
    return this.http.get(`${API_URL}/usuario?email=${email}`).map(
      (itens: ModeloUsuario[]) => {
        return itens.map(
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
        )
      }
    ).toPromise();
  }

  pegarLogado(): Promise<ModeloUsuario> {
    return this.http.get(`${API_URL}/usuario/${this.usuarioLogadoId}`).map(
      (item: ModeloUsuario) => {
        console.log(item.nome);
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

  async pegarLikes(): Promise<number[]> {
    var usuario: ModeloUsuario = await this.pegarLogado();
    return usuario.likes;
  }

  async removerLike(id: number) {
    var usuario: ModeloUsuario = await this.pegarLogado();
    var pos: number = usuario.likes.indexOf(id);
    var likes: number[] = usuario.likes;
    likes.splice(pos, 1);

    this.atualizarLikes(likes, usuario.id)
  }

  async darLike(id: number) {
    var usuario: ModeloUsuario = await this.pegarLogado();
    var likes: number[] = usuario.likes;
    likes.push(id);

    this.atualizarLikes(likes, usuario.id);
  }

  async atualizarLikes(likesAtualizados: number[], id: number) {
    const dados: any = {
      likes: likesAtualizados
    }
  
    this.http.patch(`${API_URL}/usuario/${id}`, dados).toPromise();
  }
}
