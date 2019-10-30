import { Injectable } from '@angular/core';
import { ModeloBoletim } from '../model/boletim.model';

@Injectable({
  providedIn: 'root'
})
export class BoletimService {

  listaBoletim: ModeloBoletim[];

  constructor() { 
    this.listaBoletim =  [
      new ModeloBoletim(
        1,
        "É montagem vídeo que mostra furacão Dorian sobre as Bahamas",
        10,
        new Date("09/15/2019 15:00:24"),
        "https://piaui.folha.uol.com.br/lupa/wp-content/uploads/2019/09/furacao-dorian-bahamas-destaque.jpg" 
      ),
      new ModeloBoletim(
        2,
        "É montagem vídeo que mostra furacão Dorian sobre as Bahamas",
        10,
        new Date("09/15/2019 15:00:24"),
        "https://piaui.folha.uol.com.br/lupa/wp-content/uploads/2019/09/furacao-dorian-bahamas-destaque.jpg" 
      ),
      new ModeloBoletim(
        3,
        "É montagem vídeo que mostra furacão Dorian sobre as Bahamas",
        10,
        new Date("09/15/2019 15:00:24"),
        "https://piaui.folha.uol.com.br/lupa/wp-content/uploads/2019/09/furacao-dorian-bahamas-destaque.jpg" 
      ),
    ];
  }
  
  getAll(): ModeloBoletim[] {
    return this.listaBoletim;
  }

  getPeloId(id: number): ModeloBoletim {
    return this.listaBoletim.find(
      (boletim: ModeloBoletim) =>  {
        return (boletim.id == id)
      }
    );
  }
}
