import reloj from '../assets/img/reloj.png'

export default function Header() {
  return (
    <div className='bg-sky-700 text-white w-full h-40 flex items-center justify-center rounded-b-lg relative'>
      <h1 className='text-2xl font-bold'>STROOPER</h1>
      <div className='bg-white rounded-full flex items-center justify-center gap-2 absolute right-135 top-25'>
        <img src={reloj} alt="logo" className='w-30 h-30' />
      </div>
    </div>
  )
}