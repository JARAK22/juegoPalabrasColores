import React, { useState, useEffect } from 'react'
import reloj from '../assets/img/reloj.png'
import { FaCheck, FaX } from "react-icons/fa6";
import type { GameSettings } from '../data/Game';
import Puntaje from './Puntaje';

export default function Play() {
    const storedSettings = localStorage.getItem('customGameSettings');
    // si storedSettings es null, se establecen las condiciones por defecto
    // si no es null, se parsea el storedSettings
    // convierte el storedSettings a un objeto de tipo GameSettings
    const settings: GameSettings = storedSettings ? JSON.parse(storedSettings) : {
        // condiciones por defecto
        level: 'Normal',
        duration: 30,
        wordTime: 3
    };
    console.log(settings)
    // creamos dos arrays para las palabras y los colores
    const palabrasColores = ['rojo', 'azul', 'verde', 'amarillo', 'morado', 'naranja', 'negro']
    const colores = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'black']

    // estado de la partida
    const [puntos, setPuntos] = useState(0)
    const [correctas, setCorrectas] = useState(0)
    const [incorrectas, setIncorrectas] = useState(0)
    const [dificultad, setDificultad] = useState(settings.level)
    const [tiempoPalabra, setTiempoPalabra] = useState(settings.wordTime)
    const [tiempoRestante, setTiempoRestante] = useState(settings.duration)
    const [finJuego, setFinJuego] = useState(false)

    // Usamos los indices en vez de los valores directos
    const [indicePalabra, setIndicePalabra] = useState(Math.floor(Math.random() * palabrasColores.length))
    const [indiceColor, setIndiceColor] = useState(Math.floor(Math.random() * colores.length))

    // funcion para generar una nueva palabra
    const generarPalabra = () => {
        const nuevoIndicePalabra = Math.floor(Math.random() * palabrasColores.length);
        const nuevoIndiceColor = Math.floor(Math.random() * colores.length);
        setIndicePalabra(nuevoIndicePalabra);
        setIndiceColor(nuevoIndiceColor);
        setDificultad(settings.level);
        setTiempoPalabra(settings.wordTime);
    }
    // usamos el useEffect para actualizar el estado de la dificultad y el tiempo restante
    useEffect(() => {
        setDificultad(settings.level);
        setTiempoPalabra(settings.wordTime);
    }, [settings.level, settings.wordTime]);

    const generarPalabraCorrecta = () => {
        // Validar si el índice de la palabra es igual al del color
        if (indicePalabra === indiceColor) {
            setCorrectas(correctas + 1)
            setPuntos(puntos + 10)
        } else {
            setPuntos(puntos - 10)
            setIncorrectas(incorrectas + 1)
        }
        generarPalabra()
    }
    const generarPalabraIncorrecta = () => {
        if (indicePalabra !== indiceColor) {
            setCorrectas(correctas + 1)
            setPuntos(puntos + 10)
        } else {
            setPuntos(puntos - 10)
            setIncorrectas(incorrectas + 1)
        }
        generarPalabra()
    }

    // Efecto para disminuir el tiempo automáticamente
    useEffect(() => {
        const timer = setInterval(() => {
            setTiempoPalabra(prev => {
                if (prev <= 1) {
                    generarPalabra();
                    return settings.wordTime; // Reinicia al valor de ajustes
                } else {
                    return prev - 1;
                }
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [settings.wordTime]); // Solo depende del ajuste, no del tiempo

    // para que el juego termine cuando el tiempo restante sea 0
    useEffect(() => {
        if (tiempoRestante <= 0 && !finJuego) {
            setFinJuego(true);
            return;
        }
        if (finJuego) return;
        const tiempoJuego = setInterval(() => {
            setTiempoRestante(prev => {
                if (prev <= 1) {
                    setFinJuego(true);
                    return 0;
                } else {
                    setPuntos(puntos - 10)
                    setIncorrectas(incorrectas + 1)
                    return prev - 1;
                }
            });
        }, 1000);
        return () => clearInterval(tiempoJuego);
    }, [tiempoRestante, finJuego]);

    if (finJuego) {
        return <Puntaje puntos={puntos} correctas={correctas} incorrectas={incorrectas} dificultad={dificultad} />;
    }

    return (
        <div>
            <div className='bg-sky-700 text-white w-full h-40 flex items-center justify-center rounded-b-lg relative'>
                <div className='flex items-center justify-center gap-3 text-2xl w-full'>
                    <div className='w-1/4'>
                        <p>Cantidad de puntos</p>
                        <p>{puntos}</p>
                    </div>
                    <div className='w-1/4'>
                        <p>Correctas</p>
                        <p>{correctas}</p>
                    </div>
                    <div className='w-1/4'>
                        <p>Incorrectas</p>
                        <p>{incorrectas}</p>
                    </div>
                    <div className='w-1/4'>
                        <p>Dificultad</p>
                        <p>{dificultad}</p>
                    </div>
                    <div className='w-1/4'>
                        <p>Tiempo restante</p>
                        <p>{tiempoRestante}</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center gap-2 text-2xl w-full h-80'>
                <div className='relative w-40 h-40 rounded-full flex items-center justify-center border-2 border-solid'>
                    <p style={{ color: colores[indiceColor] }} className='text-4xl font-bold'>{palabrasColores[indicePalabra]}</p>
                </div>
            </div>
            <div className='flex items-center justify-center gap-2'>
                <button className='bg-green-500 text-white rounded-full p-2 hover:bg-green-600' onClick={generarPalabraCorrecta}>
                    <FaCheck className='text-5xl' />
                </button>
                <img src={reloj} alt="logo" className='w-30 h-30' />
                <button className='bg-red-500 text-white rounded-full p-2 hover:bg-red-600' onClick={generarPalabraIncorrecta}>
                    <FaX className='text-5xl' />
                </button>
            </div>
        </div>
    )
}