"use client"
import Footer from '@/layout/Footer'
import React from 'react'
import Button from '../button/Button'
import Image from 'next/image'

const Services = ({ data }) => {

  //abrir whatsapp 
  const handler = () => {
    window.open("https://wa.me/message/LDT4MVFTIBWMM1")
  }

  return (
    <>
      <div className='w-full  flex flex-col justify-between h-[2400px] p items-center bg-maincolor text-secundary'>
        {
          data.map(row => (
            <div key={row.id} className='w-[74%] h-full mark grid grid-cols-2 '>
              <div className='flex flex-col justify-between py-2 items-center mt-14 h-[80%]'>
                <h3 className='font-bold text-4xl'>{row.tittle}</h3>
                <p className='font-normal opacity-75 text-xl'>{row.info}</p>
                <p className='font-semibold text-2xl'>$ {row.price} COP.</p>
                <Button children="Contáctame" handler={()=>handler()}/>
              </div>
              <div className='flex justify-end items-center'>
                <Image  src={row.img} alt="" className='object-cover' width={350} height={300} quality={100}	 />
              </div>
            </div>
          ))
        }
      </div>
      <Footer />
    </>
  )
}

export default Services
