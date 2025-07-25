import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function TopPuntaje() {
    const [puntajes, setPuntajes] = useState<{ nombre: string; puntajes: number }[]>([])
    const navigate = useNavigate()
    useEffect(() => {
        const puntajesGuardados = JSON.parse(localStorage.getItem('puntajeTop') || '[]')
        setPuntajes(puntajesGuardados)
    }, [])

    return (
        <div className='bg-sky-700 w-full h-150 flex items-center justify-center rounded-xl'>
            <div className='bg-white w-100 h-100 flex flex-col items-center justify-center rounded-xl'>
                <button onClick={() => navigate('/')}><FaArrowLeft className='text-sky-700 text-4xl'/></button>
                <h1 className='text-2xl font-bold text-center text-gray-800 mb-6'>Top Puntaje</h1>
                <ul>
                    {puntajes.map((p, i) => (
                        <div key={i} className='flex items-center justify-center w-50 h-10 bg-gray-200 rounded-xl mb-6'>
                            <li className='text-gray-800'>{p.nombre}: {p.puntajes}</li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}