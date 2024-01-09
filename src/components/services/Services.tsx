"use client"
import Footer from '../../layout/Footer'
import React, { useEffect, useState } from 'react'
import Button from '../button/Button'
import Image from 'next/image'


const Services = ({ info: data }) => {

  const [screen, setScreen] = useState(0)
  const [widthImg, setwidthImg] = useState(300)
  useEffect(() => {
    setScreen(window.innerWidth)
  }, [])
  //abrir whatsapp 
  const handler = () => {
    window.open("https://wa.me/message/LDT4MVFTIBWMM1")
  }

  return (
    <>

      {
        data.map((row: any) => (
          row.type === 1 ?
            <div className='w-full  flex flex-col justify-between h-[2400px] p items-center bg-maincolor text-secundary' key={row.id}>
              <div className='w-[74%] h-full mark grid grid-cols-2 '>
                <div className='flex flex-col justify-between py-2 items-center mt-14 h-[80%]'>
                  <h3 className='font-bold text-4xl'>{row.tittle}</h3>
                  <p className='font-normal opacity-75 text-xl'>{row.info}</p>
                  <p className='font-semibold text-2xl'>$ {row.price} COP.</p>
                  <Button  handler={() => handler()}>Contáctame</Button>
                </div>
                <div className='flex justify-end items-center'>
                  <Image src={row.img} alt="" className='object-cover' width={350} height={300} quality={100} />
                </div>
              </div>
            </div>
            : row.type === 2 ?
            <div className='w-full flex flex-col justify-between h-[1200px] sm:h-[1300px] items-center bg-maincolor text-secundary ' key={row.id}>
              <div className='w-[74%] h-full grid grid-cols-2 my-20 sm:flex sm:flex-col'>
                <div className=' py-2 items-center max-h-[85%] overflow-y-auto'>
                  <div className='h-[1400px] sm:justify-evenly sm:h-[1000px] flex flex-col justify-around px-10 sm:p-0'>
                    <h3 className='font-bold text-4xl uppercase sm:text-2xl'>{row.tittle}</h3>
                    <p className='opacity-80 text-xl sm:text-sm'>{row.info}</p>
                    {
                      row.descrip === undefined ?
                        null
                        :
                        <ul>
                          {row.descrip.map((list:any, index:any) => (
                            <li className={`text-xl sm:text-sm  opacity-80 ${index === 0 ? "opacity-100 font-bold pb-3 text-2xl" : null}`} key={index}>
                              {list + (index === 0 ?  ":" : "")}
                            </li>
                          ))}
                        </ul>
                    }
                    <p className='font-semibold text-2xl sm:text-lg'>$ {row.price} COP.</p>
                    <div className='flex justify-center'><Button handler={() => handler()} >Contáctame</Button> </div>
                  </div>
                </div>
                <div className='flex justify-end sm:justify-center h-[85%] sm:h-[80%] sm:mt-24'>
                  <video className="h-[97%] sm:h-[70%] w-[80%] sm:w-[90%] rounded-3xl" controls autoPlay muted loop>
                    <source src={row.url} type="video/mp4" className='w-full h-full' />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            :
            <div className='w-full  flex flex-col justify-between h-[1100px] sm:h-[1400px] p items-center bg-maincolor text-secundary' key={row.id}>
            <div key={row.id} className='w-[74%] h-full mark grid grid-cols-2 sm:flex sm:flex-col '>
              <div className='flex flex-col justify-between py-2 mt-28 h-[80%]'>
                <h3 className='font-bold text-4xl uppercase sm:text-2xl'>{row.tittle}</h3>
                <p className='font-normal opacity-75 text-xl sm:text-sm'>{row.info}</p>
                {
                      row.descrip === undefined ?
                        null
                        :
                        <ul>
                          {row.descrip.map((list:any, index:any) => (
                            <li className={`text-xl sm:text-sm  opacity-80 ${index === 0 ? "opacity-100 font-bold pb-3 text-2xl sm:text-base " : null}`} key={index}>
                              {list + (index === 0 ?  ":" : "")}
                            </li>
                          ))}
                        </ul>
                    }
                <p className='font-semibold text-2xl sm:text-lg'>$ {row.price} COP.</p>
                <div className='w-full flex justify-center'><Button handler={() => handler()} >Contáctame</Button></div>
              </div>
              <div className='flex justify-end items-center'>
                <Image src={row.img} alt="" className='object-cover sm:object-contain h-[900px] w-[600px] sm:h-[650px] sm:w-[400px]' width={400} height={200} quality={100} />
              </div>
            </div>
          </div>
        ))

      }

      <Footer />
    </>
  )
}

export default Services
