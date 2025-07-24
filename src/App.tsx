import './App.css'
import Home from './comoponents/Home'
import Play from './comoponents/Play'
import Ajustes from './comoponents/Ajustes'
import Ayuda from './comoponents/Ayuda'
import Puntaje from './comoponents/Puntaje'
import TopPuntaje from './comoponents/TopPuntaje'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/juego' element={<Play />} />
          <Route path='/ajustes' element={<Ajustes />} />
          <Route path='/ayuda' element={<Ayuda />} />
          <Route path='/puntaje' element={<Puntaje puntos={0} correctas={0} incorrectas={0} dificultad='Normal' />} />
          <Route path='/top-puntaje' element={<TopPuntaje />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
