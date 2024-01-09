import React from 'react'
import img from '../../assets/img/novia.jpg'
import ButtonSecundary from '../buttonSecundary/ButtonSecundary'
import Image from 'next/image'


const Novias = () => {
  return (
    <div className='grid grid-cols-2 scroll-smooth sm:flex' id='novias'>
      <div className='w-full flex justify-center items-center sm:hidden'><Image src={img.src} alt="" className='w-[60%] h-[70%] object-cover' quality={100} width={300} height={200}/></div>
      <div className='flex flex-col items-center justify-between sm:h-[130%] w-full sm:items-start'>
        <h2 className='text-5xl font-serif font-medium uppercase sm:text-3xl'>Paquetes <span className='sm:text-primary'>novias</span></h2>
        <p className='w-[70%] sm:text-sm self-center'>El maquillaje de novia es una técnica especializada que resalta la belleza natural de la novia en su día especial. Consiste en aplicar cuidadosamente productos cosméticos para realzar rasgos, corregir imperfecciones y lograr un aspecto radiante y duradero, adaptado al estilo personal de la novia y a la ocasión única que representa su boda.</p>
        <ButtonSecundary  link="novias">Ver más...</ButtonSecundary>
      </div>
    </div>
  )
}

export default Novias
