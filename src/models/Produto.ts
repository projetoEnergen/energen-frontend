import { Categoria } from "./Categoria";

export interface Produto {
    id: number;
    nome: string;
    marca: string;
    descricao: string;
    preco: number;
    qtd_estoque: number;
    foto: string;
    categoria?: Categoria;
}