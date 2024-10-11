"use client";

import Create from '@/app/components/Create';

const CidadeForm: React.FC = () => {
    const nome = 'cidades'
    const ob = {
        nome: '',
        created_at: Date,
        updated_at: Date,
        estado: 0,

    };

    return (

        <div>
            <Create params={{
                nome: nome, value: ob
            }} />
        </div>
    );
};

export default CidadeForm;