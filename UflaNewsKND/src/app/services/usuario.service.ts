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

  constructor(public http: HttpClient) {
  }

  getId() {
    return this.usuarioLogadoId;
  }

  setUsuarioLogadoId(id: number) {
    this.usuarioLogadoId = id;
  }
  
  cadastrar(usuario: ModeloUsuario): Promise<number> {
    const dados: any = {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      senha: usuario.senha,
      likes: usuario.likes,
      inscricoes: usuario.inscricoes
    }

    return this.http.post(`${API_URL}/usuario`, dados).map(
      (user: ModeloUsuario) => user.id
    ).toPromise();
  }

  async proximoId(): Promise<number> {
    const usuarios = await this.pegarUsuarios();

    return usuarios[usuarios.length-1].id + 1;
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

  pegarPeloNome(nome: string): Promise<ModeloUsuario[]> {
    return this.http.get(`${API_URL}/usuario?nome=${nome}`).map(
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

  async pegarUsuarios(): Promise<ModeloUsuario[]> {
    return this.http.get(`${API_URL}/usuario`).map(
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
}
