"use client"
import Footer from '@/layout/Footer'
import React from 'react'
import Button from '../button/Button'

const Services = ({ data }) => {

  //abrir whatsapp 
  const handler = () => {
    window.open("https://wa.me/qr/LEHNCHMOAXXJK1")
  }

  return (
    <>
      <div className='w-full flex flex-col justify-center items-center bg-maincolor text-secundary'>
        {
          data.map(row => (
            <div className='w-[74%] h-full mark grid grid-cols-2 '>
              <div key={row.id} className='flex flex-col justify-between py-2 items-center mt-36 h-[60%]'>
                <h3 className='font-bold text-4xl'>{row.tittle}</h3>
                <p className='font-normal opacity-75 text-xl'>{row.info}</p>
                <p className='font-semibold text-2xl'>${row.price}</p>
                <Button children="Contáctame" handler={()=>handler()}/>
              </div>
              <div className='flex justify-end items-center'>
                <img src={row.img} alt="" className='h-[60%] object-cover w-[80%]' />
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
