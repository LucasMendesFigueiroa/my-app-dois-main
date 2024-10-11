"use client";
import { useState } from 'react';
import apiClient from '../../lib/axios';
import Link from 'next/link';
import Create from '@/app/components/Create';
import IEstado from '@/app/types/IEstado';

const EstadoForm: React.FC = () => {
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
            <Create params={{
                nome: nome, value: ob
            }} />
        </div>
    );
};

export default EstadoForm;