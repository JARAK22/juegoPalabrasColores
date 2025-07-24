import React, { useEffect, useState } from 'react'

export default function TopPuntaje() {
    const [puntajes, setPuntajes] = useState<{ nombre: string; puntajes: number }[]>([])

    useEffect(() => {
        const puntajesGuardados = JSON.parse(localStorage.getItem('puntajeTop') || '[]')
        setPuntajes(puntajesGuardados)
    }, [])

    return (
        <div>
            <h1>Top Puntaje</h1>
            <ul>
                {puntajes.map((p, i) => (
                    <li key={i}>{p.nombre}: {p.puntajes}</li>
                ))}
            </ul>
        </div>
    )
}