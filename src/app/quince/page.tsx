import Services from '../../components/services/Services'
import Header from '../../layout/Header'
import React from 'react'
import img from '../../assets/img/makeupxv.jpg'

const PageQuince = () => {

  const modelService = [
    {
      id: 1,
      img: img.src,
      tittle: "Maquillaje XV",
      descrip: [
      "Incluye",
      "Maquillaje tradicional",
      "Pestañas",
      "FIijador",
      "Mascarilla Facial",
      "Piel Semi Blindada",
      "Tocado adicional",
      "Aromaterapia",
      ],
      info: "¡Llego tu día, quinceañera! Probablemente hoy será uno de los días más importantes de tu vida, ¡aprovéchalo!",
      price: 199 + "." + 999
    },
  ]
  return (
    <>
      <Header />
      <Services info={modelService} />
    </>
  )
}

export default PageQuince
