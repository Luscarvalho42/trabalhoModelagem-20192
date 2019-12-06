import { Component, OnInit } from '@angular/core';
import { ModeloPublicador } from 'src/app/model/publicador.model';
import { ServicoUsuario } from 'src/app/services/usuario.service';
import { ServicoPublicador } from 'src/app/services/publicador.service';

@Component({
  selector: 'app-inscricoes',
  templateUrl: './inscricoes.page.html',
  styleUrls: ['./inscricoes.page.scss'],
})
export class InscricoesPage implements OnInit {

  ngOnInit(): void {
  }

  listaPublicadoresInscritos: ModeloPublicador[];
  listaTodosPublicadores: ModeloPublicador[];
  listaInscricoes: number[];

  constructor(
    public usuarios: ServicoUsuario,
    public publicadores: ServicoPublicador
  ) {}

  async ionViewDidEnter() {
    await this.delay(100);
    this.incricoes();
    this.todos();
  }
  
  async incricoes() {
    this.listaInscricoes = [];
    this.listaPublicadoresInscritos = [];
    this.listaInscricoes = await this.usuarios.pegarInscricoes(this.usuarios.getId());

    for(let i = 0; i < this.listaInscricoes.length; i++) {
      var publicador = await this.publicadores.pegarPeloId(this.listaInscricoes[i]);
      this.listaPublicadoresInscritos.unshift(publicador);
    }
  }

  async todos() {
    this.listaTodosPublicadores = [];
    var todos = await this.publicadores.pegarIdTodos();

    for(let i = 0; i < todos.length; i++) {
      var publicador = await this.publicadores.pegarPeloId(todos[i]);
      this.listaTodosPublicadores.unshift(publicador);
    }
  }

  cancelarInscricao(id: number) {
    var index = this.listaInscricoes.indexOf(id);
    this.listaInscricoes.splice(index, 1);
    this.usuarios.atualizarInscricoes(this.listaInscricoes);
  }

  inscrever(id:number) {
    this.listaInscricoes.unshift(id);
    this.usuarios.atualizarInscricoes(this.listaInscricoes);
  }

  inscrito(id: number): boolean {
    if(this.listaInscricoes.indexOf(id) == -1) {
      return false;
    } else {
      return true;
    }
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
