import { Component, OnInit } from '@angular/core';
import { ModeloPublicador } from 'src/app/model/publicador.model';
import { ServicoUsuario } from 'src/app/services/usuario.service';
import { ServicoPublicador } from 'src/app/services/publicador.service';
import { LoadingController } from '@ionic/angular/dist/providers/loading-controller';

@Component({
  selector: 'app-inscricoes',
  templateUrl: './inscricoes.page.html',
  styleUrls: ['./inscricoes.page.scss'],
})
export class InscricoesPage implements OnInit {

  ngOnInit(): void {
  }

  listaPublicadoresInscritos: ModeloPublicador[];
  listaOutrosPublicadores: ModeloPublicador[];
  listaInscricoes: number[];

  constructor(
    public usuarios: ServicoUsuario,
    public publicadores: ServicoPublicador
  ) {}

  async ionViewDidEnter() {
    this.listaOutrosPublicadores = [];
    this.listaPublicadoresInscritos  = [];
    this.incricoes();
    this.outros();
  }
  
  async incricoes() {
    this.listaInscricoes = await this.usuarios.pegarInscricoes(this.usuarios.getId());

    for(let i = 0; i < this.listaInscricoes.length; i++) {
      var publicador = await this.publicadores.pegarPeloId(this.listaInscricoes[i])
      this.listaPublicadoresInscritos.unshift(publicador);
    }
  }

  async outros() {
    var todos = await this.publicadores.pegarIdTodos();

    for(let i = 0; i < todos.length; i++) {
      if(this.listaInscricoes.indexOf(todos[i]) == -1) {
        var publicador = await this.publicadores.pegarPeloId(todos[i]);
        this.listaOutrosPublicadores.unshift(publicador);
      }
    }
  }

  cancelarInscricao(id: number) {
    var index = this.listaInscricoes.indexOf(id);
    this.listaInscricoes.splice(index, 1);
    this.usuarios.atualizarInscricoes(this.listaInscricoes);
    this.ionViewDidEnter();
    
  }

  inscrever(id:number) {
    this.listaInscricoes.unshift(id);
    this.usuarios.atualizarInscricoes(this.listaInscricoes);
    this.ionViewDidEnter();
  }

}
