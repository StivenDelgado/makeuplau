import React from 'react'
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='bg-secundary min-h-[200px] w-full flex justify-center'>
      <div className='flex justify-between w-[75%] h-full mt-14'>
        <div>
          VALEN BEAUTY
          <p>Hecho por <span className='opacity-80 hover:opacity-100 cursor-pointer'>&copy;<a href="https://github.com/StivenDelgado">Stiven Delgado</a></span></p>
        </div>
        <div>
          Calle 50,<br />
          Armenia, Quindío. <br />
          (313) 703-8087
        </div>
        <ul className='opacity-90 flex flex-col justify-around space-y-2'>
          <li className='border-b-[1px] w-full hover:opacity-70 cursor-pointer'>Acerca de</li>
          <li className='border-b-[1px] w-full hover:opacity-70 cursor-pointer'>Ubicación</li>
          <li className='border-b-[1px] w-full hover:opacity-70 cursor-pointer'>Contáctame</li>
        </ul>
          <div className='flex justify-end space-x-2 w-[8%] items-center'>
          <FaFacebookSquare className='text-2xl cursor-pointer hover:opacity-70' /><FaInstagram  className='text-2xl cursor-pointer hover:opacity-70'/> <FaWhatsapp  className='text-2xl cursor-pointer hover:opacity-70'/>

        </div>
      </div>
    </footer>
  )
}

export default Footer
