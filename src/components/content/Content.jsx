import React from 'react'
import img from '../../assets/img/client.jpg'
import img2 from '../../assets/img/girl.jpg'
import Button from '../button/Button'
 
const Content = () => {
  return (
    <>
    <div className='w-full bg-secundary h-full grid grid-cols-2 relative'>
      <img src={img.src} alt="" className='h-full w-full '/>
      <div className='w-full flex justify-center items-center'><img src={img2.src} alt="" className='w-[50%] h-[60%] object-cover' /></div>
    </div>
    <div className='absolute w-full bottom-2 flex flex-col space-y-20 items-center spa'>
        <h1 className='text-9xl text-center font-serif text-maincolor'>Maquillaje <br /> <span className='pl-44'>Profesional</span></h1>
        <Button children="Ver más..."/>
    </div>
    </>
  )
}

export default Content
