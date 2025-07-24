import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { GameSettings } from '../data/Game';
import { FaArrowLeft } from 'react-icons/fa';

const Ajustes = () => {
    const [level, setLevel] = useState<'Dios' | 'Veterano' | 'Normal'>('Normal');
    const [duration, setDuration] = useState<number>(30);
    const navigate = useNavigate();

    const handleStartGame = () => {
        const wordTime = level === 'Dios' ? 1 : level === 'Veterano' ? 2 : 3;

        const settings: GameSettings = {
            level,
            duration: duration,
            wordTime,
        };

        localStorage.setItem('customGameSettings', JSON.stringify(settings));
        navigate('/juego');
    };

    const handleBack = () => {
        navigate('/');
    }

    return (
        <div className="min-h-screen bg-sky-700 flex flex-col items-center justify-center px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
                <div>
                    <button onClick={handleBack}>
                        <FaArrowLeft className='text-sky-700' text-5xl/>
                    </button>
                </div>
                {/* titulo */}
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Configura tu juego personalizado
                </h2>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Nivel de dificultad</label>
                    <select
                        value={level}
                        onChange={(e) => setLevel(e.target.value as 'Dios' | 'Veterano' | 'Normal')}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                        <option value="Dios">Dios (1s por palabra)</option>
                        <option value="Veterano">Veterano (2s por palabra)</option>
                        <option value="Normal">Normal (3s por palabra)</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 mb-1">
                        Duración total del juego (en segundos)
                    </label>
                    <input
                        type="number"
                        min={10}
                        onChange={(e) => setDuration(Number(e.target.value))}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>

                <button
                    onClick={handleStartGame}
                    className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
                >
                    Iniciar juego
                </button>
            </div>
        </div>
    );
};

export default Ajustes;