"use client";

import Create from '@/app/components/Create';

const PessoaForm: React.FC = () => {
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
            <Create params={{
                nome: nome, value: ob
            }} />
        </div>
    );
};

export default PessoaForm;