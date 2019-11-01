import { Component, OnInit } from '@angular/core';
import { ModeloPublicador } from 'src/app/model/publicador.model';
import { ServicoPublicador } from 'src/app/services/publicador.service';
import { ModeloUsuario } from 'src/app/model/usuario.model';
import { ServicoUsuario } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-inscricoes',
  templateUrl: './inscricoes.page.html',
  styleUrls: ['./inscricoes.page.scss'],
})
export class InscricoesPage implements OnInit {

  usuarioId: number;
  listaInscricoes: number[]; //Lista com os ID de cada publicador inscrito
  listaPublicadores: ModeloPublicador[];

  constructor(public usuario: ServicoUsuario, public publicador: ServicoPublicador) {
  }

  async ionViewDidEnter() {
    this.usuarioId = 1;
    this.listaInscricoes = await this.usuario.getInscricoes(this.usuarioId);

    for(var i = 0; i < this.listaInscricoes.length; i++) {
      
      console.log(this.listaPublicadores);
      //this.listaPublicadores.push(aux);
    }
  }
  
  ngOnInit() {
  }

}
