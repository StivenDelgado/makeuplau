import Nav from '@/components/Nav'
import React from 'react'

const Header = () => {
  return (
    <header className='h-[25vh]  flex flex-col justify-evenly items-center bg-secundary'>
      <div>
        <h1 className='text-5xl font-bold'>MAKEUP ARTIST</h1>
        <h2 className='font-normal text-center opacity-80'>VALEN BEAUTY</h2>
      </div>
      <Nav/>
    </header>
  )
}

export default Header
