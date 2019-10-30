import { Component, OnInit } from '@angular/core';
import { ModeloBoletim } from 'src/app/model/boletim.model';
import { BoletimService } from 'src/app/servicos/boletim.service';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})


export class FeedPage implements OnInit {

  listaBoletim: ModeloBoletim[];

  constructor(public boletins: BoletimService) { 
    this.listaBoletim = this.boletins.getAll();
  }

  procurarPorTitulo(titulo: string): ModeloBoletim[] {
    titulo = titulo.trim().toLocaleLowerCase();

    if (titulo == '') {
      return this.listaBoletim;
    }

    return this.listaBoletim.filter (
      (boletim: ModeloBoletim) => {
        return (boletim.titulo.toLocaleLowerCase().includes(titulo))
      }
    );
  }

  listar(event: any) {
    this.listaBoletim = this.procurarPorTitulo(event.tardet.value);
  }

  ngOnInit() {
  }

}


