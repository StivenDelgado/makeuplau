"use client"
import Nav from '../components/Nav'
import ButtonSecundary from '../components/buttonSecundary/ButtonSecundary'
import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";


const Header = () => {
  const [path, setPath] = useState("/")
  useEffect(() => {
    setPath(window.location.pathname)
  }, [])
  
  return (
    <header className='h-[25vh] flex flex-col justify-evenly items-center bg-secundary'>
      <div>
        <h1 className='text-5xl sm:text-2xl font-bold'>MAKEUP ARTIST</h1>
        <h2 className='font-normal text-center opacity-80 sm:text-'>VALEN BEAUTY</h2>
      </div>
      {
        path !== "/" ?
        <ButtonSecundary link="/" >
          <div className='flex items-center justify-evenly px-11 font-semibold'>
          <FaArrowLeft className='group-hover/button:-translate-x-6 transition-all duration-150 ease-in-out' />
          Regresar
          </div>
        </ButtonSecundary>
        :
        <Nav/>
      }
  
    </header>
  )
}

export default Header
