import React, { useState } from 'react'
import type { Puntaje } from '../data/Game'
import type { PuntajeGuardado } from '../data/Game'
import { useNavigate } from 'react-router-dom'
/**
 * param {{ puntos: number, correctas: number, incorrectas: number }} props
 */
export default function Puntaje({ puntos, correctas, incorrectas, dificultad }: { puntos: number, correctas: number, incorrectas: number, dificultad: 'Dios' | 'Veterano' | 'Normal' }) {

    const navigate = useNavigate()
    const [nombre, setNombre] = useState('')
    const [puntajeTop, setPuntajeTop] = useState<PuntajeGuardado[]>([])

    const handleGuardarPuntaje = () => {
        const puntajeGuardado: PuntajeGuardado = {
            puntajes: puntos,
            nombre: nombre
        }
        setPuntajeTop([...puntajeTop, puntajeGuardado])
        localStorage.setItem('puntajeTop', JSON.stringify(puntajeTop))
        console.log(puntajeTop)
        navigate('/top-puntaje')
    }

    return (
        <div className='bg-sky-700 w-full h-150 flex items-center justify-center rounded-xl'>
            <div className='bg-white w-100 h-100 flex flex-col items-center justify-center rounded-xl'>
                <h1 className='text-2xl font-bold text-center text-gray-800 mb-6'>Puntaje</h1>
                <p className='text-gray-800 mb-6'>Puntos: {puntos}</p>
                <p className='text-gray-800 mb-6'>Correctas: {correctas}</p>
                <p className='text-gray-800 mb-6'>Incorrectas: {incorrectas}</p>
                <p className='text-gray-800 mb-6'>Dificultad: {dificultad}</p>
                <input type="text" placeholder='Nombre del jugador' onChange={(e) => setNombre(e.target.value)} required className='w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-6' id='nombre' />
                <button className='bg-sky-700 text-white px-4 py-2 rounded-xl' onClick={handleGuardarPuntaje}>Guardar Puntaje</button>
            </div>
        </div>
    )
}