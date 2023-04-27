import axios from "axios";

export const api = axios.create({
    baseURL: 'https://energen.onrender.com/'
})

export const login = async(url: string, dados: object, setDados: any) => {
    const resposta = await api.post(url,dados)
    setDados(resposta.data.token)
}

export const cadastrarUsuario = async(url: string, dados: object, setDados: any) => {
    const resposta = await api.post(url,dados)
    setDados(resposta.data)
}

export const getAll = async(url: any, setDados: any, headers: any) => {
    const resposta = await api.get(url, headers)
    setDados(resposta.data)
}

export const getById = async (url: string, setDados:any , header:any) => {
    const resposta = await api.get(url, header);
    setDados(resposta.data);
};

export const post = async (url: string, dados: any, setDados:any , header:any) => {
    const resposta = await api.post(url,dados ,header);
    setDados(resposta.data);
};

export const put = async (url: string, dados: any, setDados:any , header:any) => {
    const resposta = await api.put(url,dados ,header);
    setDados(resposta.data);
};

export const deleteId = async (url: string, header:any) => {
    await api.delete(url,header);
};
