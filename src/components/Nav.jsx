import React from 'react'

const Nav = () => {
  return (
    <nav className='w-[1700px]'>
      <ul className='flex  justify-around text-maincolor'>
        <li className='cursor-pointer hover:text-primary text-lg transition-all duration-100 ease-in uppercase'>Novias</li>
        <li className='cursor-pointer hover:text-primary text-lg transition-all duration-100 ease-in uppercase'>Social</li>
        <li className='cursor-pointer hover:text-primary text-lg transition-all duration-100 ease-in uppercase'>Quinceañeras</li>
        <li className='cursor-pointer hover:text-primary text-lg transition-all duration-100 ease-in uppercase'>Quiénes somos</li>
      </ul>
    </nav>
  )
}

export default Nav
