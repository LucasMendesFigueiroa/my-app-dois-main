"use client";

import Create from '@/app/components/Create';

const DoacaoForm: React.FC = () => {
    const nome = 'doacoes'
    const ob = {
        pessoaId: 0,
        localId: 0,
        data: Date,

    };

    return (

        <div>
            <Create params={{
                nome: nome, value: ob
            }} />
        </div>
    );
};

export default DoacaoForm;