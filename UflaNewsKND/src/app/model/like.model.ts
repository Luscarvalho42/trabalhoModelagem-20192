import { ModeloBoletim } from './boletim.model';
import { ModeloUsuario } from './usuario.model';

export class ModeloLike {
    public constructor(
        public user: ModeloUsuario,
        public news: ModeloBoletim,
    ) {}
}
