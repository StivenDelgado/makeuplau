'use client'
import React from 'react'
import CardProfile from '../card/Card';
const about = () => {
  return (
    <div className='w-full pt-20 min-h-[800px] flex justify-center bg-white'>
    <div className='w-[1400px] flex flex-col items-center justify-between pb-32'>
      <CardProfile/>
      <p className='font-medium text-lg text-secundary'>Desde muy pequeña me gustaba todo lo relacionado a la belleza, siempre era la que maquillaba a todas sus amigas y familiares para sus eventos. En ese entonces solo era un <span className='text-primary'>“hobbie”</span>, le encantaba ver tutoriales en Youtube y replicar los maquillajes en ella, asi como tambien, estar al tanto de los nuevos productos de maquillaje que salian al mercado. 
Con el tiempo, mi pasión por el maquillaje fue creciendo y transformándose en algo más que un simple pasatiempo. A medida que perfeccionaba mis habilidades, comencé a recibir elogios y solicitudes de otras personas que querían que las maquillara para diferentes ocasiones. Fue entonces cuando me di cuenta de que podría convertir mi amor por la belleza en algo más significativo. Decidí explorar la posibilidad de dedicarme profesionalmente al maquillaje, asistiendo a cursos y eventos para mejorar mis conocimientos. La idea de compartir mi talento y ayudar a que otras personas se sintieran hermosas en momentos especiales se convirtió en mi motivación principal. Así, lo que empezó como un simple <span className='text-primary'>"hobbie"</span> se transformó en mi vocación, y cada día me emociona más la idea de hacer que la belleza resalte en cada rostro que tengo la oportunidad de maquillar.</p>
    </div>
    </div>
  )
}

export default about
