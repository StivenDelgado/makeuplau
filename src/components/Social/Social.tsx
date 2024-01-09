import React from 'react'
import img from '../../assets/img/brillo2.jpg'
import ButtonSecundary from '../buttonSecundary/ButtonSecundary'
import Image from 'next/image'


const Social = () => {
    return (
        <div className='grid grid-cols-2' id='social'>
            <div className='w-full flex justify-center items-center'><Image src={img.src} alt="" className='w-[60%] h-[70%] object-cover' quality={100} width={300} height={200} /></div>
            <div className='flex flex-col items-center justify-evenly'>
                <h2 className='text-5xl font-serif uppercase'>Maquillaje social</h2>
                <p className='w-[70%]'>El maquillaje social es una técnica versátil y adaptada a diversas ocasiones, como eventos sociales, fiestas o salidas. Busca realzar la belleza natural de una persona mediante el uso de productos cosméticos, resaltando rasgos y corrigiendo imperfecciones para lograr un aspecto favorecedor y acorde al contexto social o evento específico.</p>
                <ButtonSecundary  link="social">Ver más...</ButtonSecundary>
            </div>
        </div>
    )
}

export default Social
