import React from 'react'
import Novias from '../novias/Novias'
import Social from '../Social/Social'
import Quince from '../Quince/Quince'

const MakeUps = () => {
  return (
    <div className='w-full flex justify-center bg-secundary'>
      <div className='w-[90%]'>
        <Novias/>
        <Social/>
        <Quince/>
      </div>
    </div>
  )
}

export default MakeUps
