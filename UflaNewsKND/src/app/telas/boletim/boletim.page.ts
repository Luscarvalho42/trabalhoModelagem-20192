import { Component, OnInit } from '@angular/core';
import { ModeloBoletim } from 'src/app/model/boletim.model';
import { ServicoBoletim } from 'src/app/services/boletim.service';
import { ActivatedRoute } from '@angular/router';
import { ModeloPublicador } from 'src/app/model/publicador.model';
import { AlertController } from '@ionic/angular';
import { ModeloComentario } from 'src/app/model/comentario.model';
import { ModeloSecoes } from 'src/app/model/secoes.model';
import { ServicoSecao } from 'src/app/services/topico.service';
import { ServicoPublicador } from 'src/app/services/publicador.service';
import { ServicoUsuario } from 'src/app/services/usuario.service';
import { ModeloUsuario } from 'src/app/model/usuario.model';
import { ServicoComentario } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-boletim',
  templateUrl: './boletim.page.html',
  styleUrls: ['./boletim.page.scss'],
})

export class BoletimPage implements OnInit {

  boletimAtual: ModeloBoletim;
  boletimId: number;
  publicador: ModeloPublicador;
  listaSecoes: ModeloSecoes[];
  listaComentarios: ModeloComentario[];
  modeloComentario: ModeloComentario;
  comentario: string;
  usuario: ModeloUsuario;
  idComentario: number;
  listaComentariosUsuario: ModeloComentario[];

  constructor(public activatedRoute: ActivatedRoute,
    public servicoBoletim: ServicoBoletim,
    public controleAlerta: AlertController,
    public servicoSecao: ServicoSecao,
    public servicoPublicador: ServicoPublicador,
    public servicoUsuario: ServicoUsuario,
    public servicoComentario: ServicoComentario
  ) {}

  async ngOnInit() {

    this.usuario = await this.servicoUsuario.pegarLogado();
    this.boletimId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

    this.boletimAtual = await this.servicoBoletim.pegarPeloId(this.boletimId);
    this.publicador = await this.servicoPublicador.pegarPeloId(this.boletimAtual.publicadorId);
    this.listaSecoes = await this.servicoSecao.pegarSecoesDoBoletim(this.boletimId);
    this.listaComentariosUsuario = await this.servicoComentario.pegarComentarioDoUsuario(this.boletimId, this.usuario.nome);
    this.listaComentarios = await this.servicoComentario.pegarComentariosDoBoletim(this.boletimId, this.usuario.nome);
  }

  async mostrarSecao(s: ModeloSecoes) {
    const secao = await this.controleAlerta.create({
      header: s.titulo,
      subHeader: "",
      message: s.conteudo,
      buttons: ['OK']
    });

    await secao.present();
    let resultado = await secao.onDidDismiss();
  }

  async comentar() {
    this.idComentario = await this.servicoComentario.proximoId();
    this.modeloComentario = new ModeloComentario(
      this.idComentario,
      this.boletimId,
      this.usuario.nome,
      this.comentario,
      this.data()
    );
    
    this.servicoComentario.salvarComentario(this.modeloComentario);
    this.comentario = "";
    this.ngOnInit();
  }

  data(): string{
    const date = new Date();

    const ano = date.getFullYear();
    const mes = date.getMonth();
    const dia = date.getDate();

    let mesValor = '';
    let diaValor = '';

    mesValor = ((mes < 10) ? '0' : '').concat(mes.toString())
    diaValor = ((dia < 10) ? '0' : '').concat(dia.toString())

    return diaValor.toString().concat('/').concat(mesValor).concat('/').concat(ano.toString());
  }

  apagar(id: number) {
    console.log(id);
    this.servicoComentario.apagarPeloId(id);
    this.ngOnInit();
    this.avisarApagado();
  }

  async avisarApagado() {
    const secao = await this.controleAlerta.create({
      header: "Apagado",
      subHeader: "",
      message: "Seu comentário foi apagado",
      buttons: ['OK']
    });

    await secao.present();
    let resultado = await secao.onDidDismiss();
  }
}
