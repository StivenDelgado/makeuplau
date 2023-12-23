import React from 'react'
import img from '../../assets/img/married.jpeg'
import ButtonSecundary from '../buttonSecundary/ButtonSecundary'


const Novias = () => {
  return (
    <div className='grid grid-cols-2'>
      <div className='w-full flex justify-center items-center'><img src={img.src} alt="" className='w-[60%] h-[70%] object-cover' /></div>
      <div className='flex flex-col items-center justify-evenly w-full '>
        <h2 className='text-5xl font-serif'>Maquillaje de novia</h2>
        <p className='w-[70%]'>El maquillaje de novia es una técnica especializada que resalta la belleza natural de la novia en su día especial. Consiste en aplicar cuidadosamente productos cosméticos para realzar rasgos, corregir imperfecciones y lograr un aspecto radiante y duradero, adaptado al estilo personal de la novia y a la ocasión única que representa su boda.</p>
        <ButtonSecundary children={"Ver más..."} link="novias"/>
      </div>
    </div>
  )
}

export default Novias
