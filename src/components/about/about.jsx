'use client'
import React from 'react'
import CardProfile from '../card/Card';
const about = () => {
  return (
    <div className='w-full pt-20 min-h-[800px] flex justify-center bg-white'>
    <div className='w-[1400px] flex flex-col items-center justify-between pb-32'>
      <CardProfile/>
      <p className='font-medium text-lg text-secundary'><span className='text-primary'>Desde muy pequeña le gustaba</span> todo lo relacionado a la belleza, siempre era la que maquillaba a todas sus amigas y familiares para sus eventos. En ese entonces solo era un “hobbie”, le encantaba ver tutoriales en Youtube y replicar los maquillajes en ella, asi como tambien, estar al tanto de los nuevos productos de maquillaje que salian al mercado. A la par Brenda se dedicó a formarse en la carrera de Negocios Internacionales, rubro al que se dedicó por casi 10 años. Un dia, en la búsqueda de tener algo propio y sentir que hacia lo que le apasionaba, tomo la decisión de crear su propia empresa. Asi fue cuando nació Bergerie Makeup e hizo que su “hobbie” sea su trabajo a tiempo completo.</p>
    </div>
    </div>
  )
}

export default about
