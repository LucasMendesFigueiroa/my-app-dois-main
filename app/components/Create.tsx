import Link from 'next/link';
import { useEffect, useState } from 'react';
import apiClient from '../lib/axios';
interface IUpdateCreateParams {
    params: {
        nome: string,
        value: Record<string, string | number | Date>,
    }
}
const Create = ({ params }: IUpdateCreateParams) => {
    const nome = params.nome;
    const titulo = [...Object.entries(params.value)];

    const [formData, setFormData] = useState({});

    useEffect(() => {
    }, [params])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const getTipo = (value) => {
        return value === 'data'
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const paramsValueStructure = params.value;

        const formattedData = Object.entries(paramsValueStructure).reduce((acc, [key, value]) => {
            if (typeof value === 'number') {
                acc[key] = formData.hasOwnProperty(key) ? parseFloat(formData[key]) : value;
            }
            else {
                acc[key] = formData.hasOwnProperty(key) ? formData[key] : value;
            }
            return acc;
        }, {});
        if (formattedData.data) {
            formattedData.data = new Date(formattedData.data);
        }
        apiClient.post(`/${nome}`, formattedData)
            .then()
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Criar </h2>
            {titulo.map((coluna) => (
                <div key={coluna[0]}>
                    <label htmlFor={coluna[0]} className="block text-sm font-medium ">{coluna[0]}</label>
                    <input
                        type={getTipo(coluna[0]) ? 'date' : ''}
                        className="border-2 border-gray-200 text-black p-2 w-full"
                        name={coluna[0]}
                        placeholder={coluna[0]}
                        onChange={handleChange}
                    />
                </div>
            ))}

            <div className="flex justify-end">
                <Link href={`/${nome}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Voltar
                </Link>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">

                    Criar

                </button>

            </div>
        </form>
    );
};

export default Create;