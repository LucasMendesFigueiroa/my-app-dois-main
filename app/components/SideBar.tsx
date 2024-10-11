"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div>
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                {/* Ícone de menu, pode ser substituído por qualquer elemento que você preferir */}
                <span className="text-2xl mt-1 ml-1">☰</span> {/* Ajuste o tamanho do texto e o espaçamento conforme necessário */}
            </button>
            {isSidebarOpen && (
                <div className="w-64 h-full bg-gray-800 text-white p-5">
                    <ul>
                        <li className="mb-4">
                            <Link href='/' className="flex items-center justify-center px-6 py-3 bg-amber-950 text-white rounded hover:bg-amber-900 transition duration-200 ease-in-out">
                                Home
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link href='/locais-coleta' className="flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 ease-in-out">
                                Locais de Coleta
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link href='/doacoes' className="flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200 ease-in-out">
                                Doações
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link href='/pessoas' className="flex items-center justify-center px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200 ease-in-out">
                                Pessoas
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link href='/tipo-sanguineos' className="flex items-center justify-center px-6 py-3 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-200 ease-in-out">
                                Tipo Sanguíneos
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link href='/estados' className="flex items-center justify-center px-6 py-3 bg-purple-500 text-white rounded hover:bg-purple-600 transition duration-200 ease-in-out">
                                Estados
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link href='/cidades' className="flex items-center justify-center px-6 py-3 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition duration-200 ease-in-out">
                                Cidades
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Sidebar;