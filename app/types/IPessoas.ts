

interface IPessoa {
    id: number
    nome: string
    rua: string
    numero: string
    complemento?: string
    rg: string
    cidadeId: number
    tipoId: number
    createdAt: Date
    updatedAt: Date

}

export default IPessoa