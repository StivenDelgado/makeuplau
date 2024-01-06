import Services from '@/components/services/Services'
import React from 'react'
import Header from '@/layout/Header'


const PageNovias = () => {
  const modelService = [
    {
    id: 1,
    tittle: "Novia minimalista",
    url: "https://res.cloudinary.com/dyrfmuceq/video/upload/v1704558831/glormlkhbkg1wbhznwwk.mp4",
    info: "Imagina el día de tu boda, un momento tan especial y único que merece un maquillaje que realce tu belleza natural y te haga brillar aún más. Para ese día tan significativo, el maquillaje de novia se trata de resaltar tus mejores rasgos de manera elegante y atemporal.",
    descrip: [
      "Incluye",
      "Prueba de maquillaje",
      "Aromaterapia",
      "Limpieza facial profunda", 
      "Kit pre boda",
      "Kit retoque",
      "Desplazamiento", 
      "Pestañas", 
      "Mascarilla aloe Vera",
      "Correcciones/ polvos y brillo ",
      "Tocado"
    ],
    price: 399 +"."+ 999,
    type: 2,
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
