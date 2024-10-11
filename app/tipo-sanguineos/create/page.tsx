"use client";

import Create from '@/app/components/Create';

const TipoSanguineoForm: React.FC = () => {
    const nome = 'tipo-sanguineos'
    const ob = {

        tipo: '',
        fator: '',


    };

    return (

        <div>
            <Create params={{
                nome: nome, value: ob
            }} />
        </div>
    );
};

export default TipoSanguineoForm;