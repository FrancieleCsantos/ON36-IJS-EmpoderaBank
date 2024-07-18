interface Cliente {
    nomeCompleto: string;
    id: number;
    endereco: string;
    telefone: string;
}

 export class ClienteImpl implements Cliente {
    constructor(
        public nomeCompleto: string,
        public id:number,
        public endereco: string,
        public telefone: string
        
    ) {}
    
}