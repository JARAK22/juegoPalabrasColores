import { FaPlay } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { GiChampions } from "react-icons/gi";
import { IoMdHelpCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Card() {
    const navigate = useNavigate();
    const handleClick = (card: any) => {
      if(card.title === 'Jugar'){
        navigate('/juego');
      }else if(card.title === 'Ajustes'){
        navigate('/ajustes');
      }else if(card.title === 'Puntaje'){
        navigate('/puntaje');
      }else if(card.title === 'Ayuda'){
        navigate('/ayuda');
      }
    }
    const cardData = [
        {
            id: 1,
            title: 'Jugar',
            image: <FaPlay className="text-sky-700 text-4xl"/>,
        },
        {
            id: 2,
            title: 'Ajustes',
            image: <IoMdSettings className="text-sky-700 text-4xl"/>,
        },
        {
            id: 3,
            title: 'Puntaje',
            image: <GiChampions className="text-sky-700 text-4xl"/>,
        },
        {
            id: 4,
            title: 'Ayuda',
            image: <IoMdHelpCircle className="text-sky-700 text-4xl"/>,
        },
    ]
  return (
    <div className='flex mt-15'>
      {cardData.map((card: cardData) => (
        <div key={card.id} className='bg-white rounded-lg p-4 w-200 h-50 m-4 flex flex-col items-center justify-center gap-2' onClick={() => handleClick(card)}>
          {card.image}
          <h1 className='text-2xl font-bold'>{card.title}</h1>
        </div>
      ))}
    </div>
  )
}