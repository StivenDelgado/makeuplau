import Services from '@/components/services/Services'
import React from 'react'
import imgExamp1 from "@/assets/img/example1.jpeg"
import imgExamp2 from "@/assets/img/example2.jpeg"
import imgExamp3 from "@/assets/img/example3.jpeg"
import imgExamp4 from "@/assets/img/example4.jpeg"
import Header from '@/layout/Header'


const PageNovias = () => {
  const modelService = [
    {
    id: 1,
    img : imgExamp1.src,
    tittle: "Novia tales",
    info: "Imagina el día de tu boda, un momento tan especial y único que merece un maquillaje que realce tu belleza natural y te haga brillar aún más. Para ese día tan significativo, el maquillaje de novia se trata de resaltar tus mejores rasgos de manera elegante y atemporal.",
    price: 149 +"."+ 999
  },
  {
    id: 2,
    img : imgExamp2.src,
    tittle: "Novia tales",
    info: "Imagina el día de tu boda, un momento tan especial y único que merece un maquillaje que realce tu belleza natural y te haga brillar aún más. Para ese día tan significativo, el maquillaje de novia se trata de resaltar tus mejores rasgos de manera elegante y atemporal.",
    price: 99 +"."+ 999
  },
    {
    id: 3,
    img : imgExamp3.src,
    tittle: "Novia tales",
    info: "Imagina el día de tu boda, un momento tan especial y único que merece un maquillaje que realce tu belleza natural y te haga brillar aún más. Para ese día tan significativo, el maquillaje de novia se trata de resaltar tus mejores rasgos de manera elegante y atemporal.",
    price: 99+"."+999
  },  {
    id: 4,
    img : imgExamp4.src,
    tittle: "Novia tales",
    info: "Imagina el día de tu boda, un momento tan especial y único que merece un maquillaje que realce tu belleza natural y te haga brillar aún más. Para ese día tan significativo, el maquillaje de novia se trata de resaltar tus mejores rasgos de manera elegante y atemporal.",
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

export default PageNovias
