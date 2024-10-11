"use client";
import Update from '@/app/components/Update';
interface IUpdateTipoSanguineoParams {
    params: {
        id: string
    }
}

export default function TipoSanguineoUpdate({ params }: IUpdateTipoSanguineoParams) {

    const nome = 'tipo-sanguineos'
    const ob = {

        tipo: '',
        fator: '',


    };
    return (
        <div>
            <Update params={{ nome: nome, id: params.id, value: ob }} />
        </div>
    );
};

