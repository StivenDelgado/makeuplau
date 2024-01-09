import React from 'react'

const Conditions = () => {
  return (
    <div className='bg-white text-secundary h-[800px] py-14 flex flex-col items-center justify-around'>
      <h3 className='text-4xl text-primary font-bold'>CONSIDERACIONES</h3>
      <div className='w-[72%]'>
        <p className='font-bold uppercase text-lg'>Fecha y hora:</p>
        <p className='text-lg'>Debes indicarnos qué día y hora te gustaría agendar cita y nosotros poder confirmar disponibilidad</p>
      </div>
      <div className='w-[72%]'>
        <p className='font-bold uppercase text-lg'>Anticipo:</p>
        <p className='text-lg'>Para agendar una cita se requiere de un anticipo del 50% del valor del paquete elegido para guardar tu lugar en la agenda y así confirmar asistencia</p>
      </div>
      <h3 className='text-4xl text-primary font-bold'>IMPORTANTE</h3>
      <div className='w-[72%]'>
        <p className='font-bold uppercase text-lg'>TIEMPO DE TOLERANCIA:</p>
        <p className='text-lg'>Solo 15 min de tolerancia después del tiempo tu cita se cancela automáticamente y se pierde anticipo trata de llegar a la hora agendado o estar lista para evitar aglomeraciones</p>
      </div>
      <div className='w-[72%]'>
        <p className='font-bold uppercase text-lg'>CANCELAR/REAGENDAR:</p>
        <p className='text-lg'>Mínimo 15 días antes anticipó no reembolsable.
           <br/> Si tú cita no se confirmó con el anticipo no se agenda</p>
      </div>
        <span className='opacity-70'>----NOTA: Aseguramos puntualidad y excelente atención personalizada----</span>
    </div>
  )
}

export default Conditions
