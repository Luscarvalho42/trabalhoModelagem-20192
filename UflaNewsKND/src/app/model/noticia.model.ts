export class ModeloNoticia {
    constructor(
        public publicador: string,
        public titulo: string,
        public likes: number,
        public data: Date,
        public artigo: string, 
        public capa: string,
    ) {}
}
