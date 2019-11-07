export class ModeloComentario {
    constructor(
        public id: number,
        public boletimId: number,
        public usuario: string,
        public comentario: string,
        public data: string
    ) {}
} 
