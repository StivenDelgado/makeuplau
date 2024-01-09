import React, { useEffect, useState } from 'react'
import { RiMenu2Fill } from "react-icons/ri";


const Nav = () => {
  const [screen, setScreen] = useState(0)
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    setScreen(window.innerWidth)
  }, [])

  const open = (value: boolean) => {
    setToggle(value)
  } 
  
  return (
    <div className='relative w-full flex justify-center'>
    {
      screen <= 900 ? 
        <button className='cursor-pointer text-center' onClick={() => open(!toggle)}><RiMenu2Fill size={35}/></button>
      :
      <nav className='w-[1700px]'>
      <ul className='flex justify-around text-maincolor'>
        <li className='cursor-pointer hover:text-primary text-lg transition-all duration-100 ease-in uppercase scroll-smooth'><a href="#novias">Novias</a></li>
        <li className='cursor-pointer hover:text-primary text-lg transition-all duration-100 ease-in uppercase scroll-smooth'><a href="#social">Social</a></li>
        <li className='cursor-pointer hover:text-primary text-lg transition-all duration-100 ease-in uppercase scroll-smooth'><a href="#quince">Quinceañeras</a></li>
        <li className='cursor-pointer hover:text-primary text-lg transition-all duration-100 ease-in uppercase scroll-smooth'><a href="#who">Quiénes somos</a></li>
      </ul>
    </nav>
    
    }
    {
      toggle ?
      <div className='bg-white absolute -bottom-56 m-0 z-10 right-0 left-5 rounded-xl w-[90%] text-center  h-48'>
        <ul className='flex flex-col justify-between h-full py-5 text-maincolor'>
        <li className='cursor-pointer text-secundary text-lg transition-all duration-100 ease-in uppercase scroll-smooth'><a href="#novias">Novias</a></li>
        <li className='cursor-pointer text-secundary text-lg transition-all duration-100 ease-in uppercase scroll-smooth'><a href="#social">Social</a></li>
        <li className='cursor-pointer text-secundary text-lg transition-all duration-100 ease-in uppercase scroll-smooth'><a href="#quince">Quinceañeras</a></li>
        <li className='cursor-pointer text-secundary text-lg transition-all duration-100 ease-in uppercase scroll-smooth'><a href="#who">Quiénes somos</a></li>
      </ul>
      </div>
      :
      null
    }
    </div>
  )
}

export default Nav
