import {Produto} from './../models/Produto'

export interface Categoria {
    id: number;
    nome: string;
    produto?: Produto[]
}