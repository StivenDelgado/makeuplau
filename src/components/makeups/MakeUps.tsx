import React from 'react'
import Novias from '../novias/Novias'
import Social from '../Social/Social'
import Quince from '../Quince/Quince'

const MakeUps = () => {
  return (
    <div className='w-full flex justify-center bg-secundary'>
      <div className='w-[90%] sm:w-[88%] sm:h-[1300px] sm:flex sm:flex-col sm:justify-around sm:mb-20'>
        <Novias/>
        <Social/>
        <Quince/>
      </div>
    </div>
  )
}

export default MakeUps
