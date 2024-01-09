'use client'
import React from 'react'
import CardProfile from '../card/Card';
const about = () => {
  return (
    <div className='w-full pt-20 min-h-[800px] flex justify-center bg-white' id='who'>
    <div className='w-[1400px] flex flex-col items-center justify-between pb-32'>
      <CardProfile/>
      <p className=' text-lg text-secundary font-medium pb-10 sm:p-16 sm:text-sm sm:pb-0'>
      Desde muy pequeña le gustaba todo lo relacionado a la belleza, siempre era la que maquillaba a todas sus amigas y familiares para sus eventos. En ese entonces solo era un <span className='text-primary'>“hobbie”</span>, le encantaba ver tutoriales en Youtube y replicar los maquillajes en ella, asi como tambien, estar al tanto de los nuevos productos de maquillaje que salian al mercado. A la par <span className='text-primary'>Valentina</span> se dedicó a formarse en la carrera lenguas modernas, rubro al que se dedicó por casi 3 años. Un dia, en la búsqueda de tener algo propio y sentir que hacia lo que le apasionaba, tomo la decisión de crear su propia empresa. Asi fue cuando nació <span className='text-primary'>VALEN BEAUTY</span> e hizo que su <span className='text-primary'>“hobbie”</span> sea su trabajo a tiempo completo.
     <br/> <br/>  Actualmente <span className='text-primary'>Valentina</span> cuenta con estudios en Colombia, Quindio. Ha ido a clases con Mariana Navarro, Hernan de la Cruz y Johana Godoy. Presta sus servicios a novias, quinceañeras y social.
      </p>
      <div className='flex flex-row justify-around sm:mt-10 pt-10 border-t-2 border-primary sm:flex-col sm:pl-16 sm:space-y-5'>
        <div className='w-[40%] flex flex-col space-y-2 sm:w-[80%]'>
          <h2 className='text-2xl text-primary font-medium sm:text-lg'>Misión</h2>
          <p className='text-secundary font-medium text-lg sm:text-sm sm:w-full'>Satisfacer la necesidad de sentirse y verse bien. Estar a la vanguardia con las nuevas tendencias en belleza, satisfaciendo a nuestros clientes con productos, servicios, técnicas  innovadores y que nuestro cliente encuentre todo lo que busca en belleza en un solo lugar.</p>
        </div>
        <div className='w-[40%] flex flex-col space-y-2 sm:w-[80%]'>
          <h2 className='text-2xl text-primary font-medium sm:text-lg'>Visión</h2>
          <p className='text-secundary font-medium text-lg sm:text-sm'>Ser una maquilladora reconocida nacionalmente por un diferencial genuino y auténtico dentro de 3 años.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default about
