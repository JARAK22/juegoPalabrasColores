import { FaPlay } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { GiChampions } from "react-icons/gi";
import { IoMdHelpCircle } from "react-icons/io";

export default function Card() {
    const cardData = [
        {
            id: 1,
            title: 'Jugar',
            image: <FaPlay />,
        },
        {
            id: 2,
            title: 'Ajustes',
            image: <IoMdSettings />,
        },
        {
            id: 3,
            title: 'Puntaje',
            image: <GiChampions />,
        },
        {
            id: 4,
            title: 'Ayuda',
            image: <IoMdHelpCircle />,
        },
    ]
  return (
    <div className='flex mt-15'>
      {cardData.map((card: cardData) => (
        <div key={card.id} className='bg-white rounded-lg p-4 w-200 h-50 m-4 flex flex-col items-center justify-center gap-2'>
          {card.image}
          <h1 className='text-2xl font-bold'>{card.title}</h1>
        </div>
      ))}
    </div>
  )
}