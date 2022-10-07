import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://blogpessoal-g6wb.onrender.com'
})

export const cadastroUsuario = async(url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const login = async(url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data.token)
}

export const busca = async(url: any,setDado: any, header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}