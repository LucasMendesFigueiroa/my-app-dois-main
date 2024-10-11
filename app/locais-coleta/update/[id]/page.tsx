"use client";
import Update from '@/app/components/Update';
interface IUpdateLocalColetaParams {
    params: {
        id: string
    }
}

export default function LocalColetaUpdate({ params }: IUpdateLocalColetaParams) {

    const nome = 'locais-coleta'
    const ob = {


        nome: '',
        rua: '',
        numero: '',
        complemento: '',
        cidadeId: 0,


    };
    return (
        <div>
            <Update params={{ nome: nome, id: params.id, value: ob }} />
        </div>
    );
};

