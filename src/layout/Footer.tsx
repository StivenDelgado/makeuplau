import Link from 'next/link';
import React from 'react'
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='bg-secundary min-h-[200px] w-full flex justify-center'>
      <div className='flex justify-between w-[75%] sm:w-[90%] h-full mt-14 sm:grid sm:grid-cols-2'>
        <div className='sm:text-xs'>
          VALEN BEAUTY
          <p>Hecho por <span className='opacity-80 hover:opacity-100 cursor-pointer'>&copy;<a href="https://github.com/StivenDelgado">Stiven Delgado</a></span></p>
        </div>
        <div className='sm:flex sm:w-full sm:m-0 sm:justify-center sm:text-xs'>
          Calle 50,<br />
          Armenia, Quindío. <br />
          (313) 703-8087
        </div>
        <ul className='opacity-90 flex flex-col justify-around space-y-2'>
          <li className='border-b-[1px] w-full sm:w-[40%] hover:opacity-70 cursor-pointer sm:text-xs'><Link href="/">Acerca de</Link></li>
          <li className='border-b-[1px] w-full sm:w-[40%] hover:opacity-70 cursor-pointer sm:text-xs'><a href="https://www.google.com/maps/place/Armenia,+Quindío/@4.5423559,-75.7218351,13z/data=!3m1!4b1!4m6!3m5!1s0x8e38f5ade6653bc1:0xc2c6ca4ab95d8808!8m2!3d4.5350004!4d-75.6756888!16zL20vMDRkanJy?entry=ttu">Ubicación</a></li>
          <li className='border-b-[1px] w-full sm:w-[40%] hover:opacity-70 cursor-pointer sm:text-xs'><a href="https://wa.me/message/LDT4MVFTIBWMM1">Contáctame</a></li>
        </ul>
        <div className='flex justify-end space-x-2 w-[8%] items-center sm:w-full sm:justify-center'>
          <a href="">
            <FaFacebookSquare className='text-2xl sm:text-lg cursor-pointer hover:opacity-70' />
          </a>
          <a href="https://www.instagram.com/valen_beauty_____/">
            <FaInstagram className='text-2xl sm:text-lg cursor-pointer hover:opacity-70' />
          </a>
           <a href="https://wa.me/message/LDT4MVFTIBWMM1">
            <FaWhatsapp className='text-2xl sm:text-lg cursor-pointer hover:opacity-70' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
