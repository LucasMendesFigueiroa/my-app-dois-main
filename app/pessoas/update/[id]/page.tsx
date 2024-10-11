"use client";
import Update from '@/app/components/Update';
interface IUpdatePessoaParams {
    params: {
        id: string
    }
}

export default function PessoaUpdate({ params }: IUpdatePessoaParams) {

    const nome = 'pessoas'
    const ob = {

        nome: '',
        rua: '',
        numero: '',
        complemento: '',
        rg: '',
        cidadeId: 0,
        tipoId: 0,


    };

    return (
        <div>
            <Update params={{ nome: nome, id: params.id, value: ob }} />
        </div>
    );
};

