import React, { useEffect, useState } from 'react'
import img from '../../assets/img/brillo.jpg'
import img2 from '../../assets/img/maquillaje.jpg'
import Button from '../button/Button'
import Image from 'next/image'
 
const Content = () => {
  const [screen, setScreen] = useState(0)
  const [widthImg, setwidthImg] = useState(1000)
  useEffect(() => {
    setScreen(window.innerWidth)
  }, [])

  return (
    <>
    <div className='w-full bg-secundary h-full grid grid-cols-2 sm:flex relative'>
      <Image src={img.src} alt="" className='h-full w-full' width={screen <= 900 ? 200 : widthImg} height={2} quality={100}/>
      <div className='w-full flex justify-center items-center sm:hidden'><Image src={img2.src} alt="" className='w-[50%] h-[60%] object-cover' quality={100} width={200} height={200} /></div>
    </div>
    <div className='absolute w-full bottom-2  sm:top-[21rem] sm:right-12 flex flex-col space-y-20 items-center spa'>
        <h1 className='text-9xl text-center sm:text-4xl font-serif text-maincolor'>Maquillaje <br /> <span className='pl-44'>Profesional</span></h1>
        
    </div>
    </>
  )
}

export default Content
