import { ModeloPublicador } from './publicador.model';
import { ModeloTopico } from './topico.model';
import { ModeloComentario } from './comentario.model';

export class ModeloNoticia {
  constructor(
    public capa: string,
    public publicador: ModeloPublicador,
    public titulo: string,
    public likes: number,
    public artigo: string,
    public topicos: ModeloTopico[],
    public data: Date,
    public comentarios: ModeloComentario[],
  ) {}
}
