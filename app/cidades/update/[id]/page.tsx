"use client";
import Update from '@/app/components/Update';
import ICidade from '@/app/types/ICidade';
interface IUpdateCidadeParams {
    params: {
        id: string
    }
}

export default function CidadeUpdate({ params }: IUpdateCidadeParams) {

    const nome = 'cidades'
    const ob = {
        nome: '',
        created_at: Date,
        updated_at: Date,
        estado: 0,

    };
    return (
        <div>
            <Update params={{ nome: nome, id: params.id, value: ob }} />
        </div>
    );
};

