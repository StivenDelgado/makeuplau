import Services from '../../components/services/Services'
import Header from '../../layout/Header'
import React from 'react'
import img from '../../assets/img/manu.jpg'


const Pagesocial = () => {

  const modelService = [
    {
    id: 1,
    img : img.src,
    tittle: "Social",
    info: "Nuestro maquillaje social lleva estos procedimientos: Preparación de la piel para un mejor acabado en tu textura tales como: Humectación o hidratación con cremas y sueros según tú tipo de piel. Técnica de ojos en social a tu preferencia o te asesoramos una técnica según tu tipología para así armonizar tu mirada y usando una correcta colorimetría. Tenemos un precio estándar independientemente de que tengas pestañas y/o no vas a utilizar algún producto nuestro servicio tiene un valor de 70,000 sin incluir desplazamiento según tu ubicación",
    price: 69 +"."+ 999,
    type: 3
  },
]
  return (
    <>
      <Header/>
      <Services info={modelService}/>
    </>
  )
}

export default Pagesocial