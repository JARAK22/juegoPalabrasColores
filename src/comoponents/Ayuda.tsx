import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
export default function Ayuda() {
    const navigate = useNavigate()
    const handleBack = () => {
        navigate('/')
    }
    // explicacion de como funciona el juego
    return (
        <div className='bg-sky-700 w-full h-150 flex items-center justify-center rounded-xl'>
            <div className='bg-white w-100 h-100 flex flex-col items-center justify-center rounded-xl'>
                <div>
                    <button className='bg-sky-700 text-white px-4 py-2 rounded-xl' onClick={handleBack}>
                        <FaArrowLeft />
                    </button>
                </div>
                <h1 className='text-2xl font-bold text-center text-gray-800 mb-6'>Ayuda</h1>
                <p className='text-gray-800 mb-6'>El juego consiste en adivinar el color de la palabra que se muestra en la pantalla.</p>
                <p className='text-gray-800 mb-6'>Para ganar puntos, debes adivinar el color de la palabra antes de que se acabe el tiempo.</p>
                <p className='text-gray-800 mb-6'>Si no adivinas el color de la palabra, perderás puntos.</p>
            </div>
        </div>
    )
}