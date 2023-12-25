import React from 'react'

const Nav = () => {
  return (
    <nav className='w-[1700px]'>
      <ul className='flex  justify-around text-maincolor'>
        <li className='cursor-pointer hover:text-primary text-lg transition-all duration-100 ease-in uppercase scroll-smooth'><a href="#novias">Novias</a></li>
        <li className='cursor-pointer hover:text-primary text-lg transition-all duration-100 ease-in uppercase scroll-smooth'><a href="#social">Social</a></li>
        <li className='cursor-pointer hover:text-primary text-lg transition-all duration-100 ease-in uppercase scroll-smooth'><a href="#quinceañeras">Quinceañeras</a></li>
        <li className='cursor-pointer hover:text-primary text-lg transition-all duration-100 ease-in uppercase scroll-smooth'><a href="#who">Quiénes somos</a></li>
      </ul>
    </nav>
  )
}

export default Nav
