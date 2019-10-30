export class ModeloBoletim {
    constructor(
        public id: number,
        public titulo: string,
        public likes: number,
        public publishedAt: Date,
        public image: string,
    ) {}
} 
