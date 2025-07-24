export interface GameSettings {
    level: 'Dios' | 'Veterano' | 'Normal';
    duration: number;    // duración total del juego
    wordTime: number;    // tiempo por palabra (según nivel)
  }

export interface Puntaje {
    puntos: number;
    correctas: number;
    incorrectas: number;
    dificultad: 'Dios' | 'Veterano' | 'Normal';
}   

export interface PuntajeGuardado {
    puntajes: number;
    nombre: string;
}