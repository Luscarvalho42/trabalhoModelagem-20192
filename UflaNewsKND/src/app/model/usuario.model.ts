export class ModeloUsuario {
    public constructor(
        public id,
        public nome: string,
        public email: string,
        public senha: string,
        public likes: number[],
        public inscricoes: number[]
    ) { }
}
