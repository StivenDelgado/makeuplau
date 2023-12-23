import Services from '@/components/services/Services'
import Header from '@/layout/Header'
import React from 'react'
import img from '@/assets/img/social.jpg'

const Pagesocial = () => {

  const modelService = [
    {
    id: 1,
    img : img.src,
    tittle: "Novia tales",
    info: "Busca realzar la belleza de manera versátil y adecuada para diversas ocasiones, desde eventos informales hasta salidas más formales. Se enfoca en una base ligera y natural para un aspecto fresco. Los ojos pueden destacarse con sombras suaves y delineador, adaptándose al estilo del evento. Las pestañas se pueden realzar con máscara para una mirada expresiva.",
    price: 149 +"."+ 999
  },
  {
    id: 2,
    img : img.src,
    tittle: "Novia tales",
    info: "Busca realzar la belleza de manera versátil y adecuada para diversas ocasiones, desde eventos informales hasta salidas más formales. Se enfoca en una base ligera y natural para un aspecto fresco. Los ojos pueden destacarse con sombras suaves y delineador, adaptándose al estilo del evento. Las pestañas se pueden realzar con máscara para una mirada expresiva.",
    price: 99 +"."+ 999
  },
    {
    id: 3,
    img : img.src,
    tittle: "Novia tales",
    info: "Busca realzar la belleza de manera versátil y adecuada para diversas ocasiones, desde eventos informales hasta salidas más formales. Se enfoca en una base ligera y natural para un aspecto fresco. Los ojos pueden destacarse con sombras suaves y delineador, adaptándose al estilo del evento. Las pestañas se pueden realzar con máscara para una mirada expresiva.",
    price: 99+"."+999
  },  {
    id: 4,
    img : img.src,
    tittle: "Novia tales",
    info: "Busca realzar la belleza de manera versátil y adecuada para diversas ocasiones, desde eventos informales hasta salidas más formales. Se enfoca en una base ligera y natural para un aspecto fresco. Los ojos pueden destacarse con sombras suaves y delineador, adaptándose al estilo del evento. Las pestañas se pueden realzar con máscara para una mirada expresiva.",
    price: 119+"."+999
  },
]
  return (
    <>
      <Header/>
      <Services data={modelService}/>
    </>
  )
}

export default Pagesocial