"use client";
import Update from '@/app/components/Update';
interface IUpdateDoacaoParams {
    params: {
        id: string
    }
}

export default function DoacaoUpdate({ params }: IUpdateDoacaoParams) {

    const nome = 'doacoes'
    const ob = {

        pessoaId: 0,
        localId: 0,
        data: Date,

    };
    return (
        <div>
            <Update params={{ nome: nome, id: params.id, value: ob }} />
        </div>
    );
};

