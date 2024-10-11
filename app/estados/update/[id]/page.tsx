"use client";
import Update from '@/app/components/Update';
import IEstado from '@/app/types/IEstado';
interface IUpdateEstadoParams {
    params: {
        id: string
    }
}

export default function EstadoUpdate({ params }: IUpdateEstadoParams) {

    const nome = 'estados'
    const ob = {
        id: 1,
        nome: "",
        sigla: "",
        created_at: new Date(),
        updated_at: new Date()
    };


    return (
        <div>
            <Update params={{ nome: nome, id: params.id, value: ob }} />
        </div>
    );
};

