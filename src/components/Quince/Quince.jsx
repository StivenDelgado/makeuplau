import React from 'react'
import img from '../../assets/img/xv.jpg'
import ButtonSecundary from '../buttonSecundary/ButtonSecundary'
import Image from 'next/image'


const Quince = () => {
    return (
        <div className='grid grid-cols-2' id='quince'>
            <div className='w-full flex justify-center items-center'>
                <Image src={img.src} alt="" className='w-[60%] h-[70%] object-cover' quality={100} width={300} height={200} />
            </div>
            <div className='flex flex-col items-center justify-evenly'>
                <h2 className='text-5xl font-serif uppercase'>Paquetes XV</h2>
                <p className='w-[70%]'>El maquillaje para quinceañeras se enfoca en resaltar la frescura y juventud de las chicas que celebran sus quince años, empleando colores suaves y técnicas que realzan la belleza natural. Se busca crear un aspecto radiante y elegante, adaptado a la ocasión especial de su fiesta de quinceañera, destacando sus rasgos sin exceder en la intensidad del maquillaje.
                </p>
                <ButtonSecundary children={"Ver más..."} link="quince" />
            </div>

        </div>
    )
}

export default Quince
