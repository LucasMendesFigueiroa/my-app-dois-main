"use client";
import { useState } from 'react';
import apiClient from '../../lib/axios';
import Link from 'next/link';
import Create from '@/app/components/Create';

const LocalColetaForm: React.FC = () => {
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
            <Create params={{
                nome: nome, value: ob
            }} />
        </div>
    );
};

export default LocalColetaForm;