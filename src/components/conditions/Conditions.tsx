import React from 'react'

const Conditions = () => {
  return (
    <div className='bg-white text-secundary h-[800px] sm:h-[1000px] py-14 flex flex-col items-center justify-around'>
      <h3 className='text-4xl text-primary font-bold sm:text-xl'>CONSIDERACIONES</h3>
      <div className='w-[72%]'>
        <p className='font-bold uppercase text-lg sm:text-[15px]'>Fecha y hora:</p>
        <p className='text-lg sm:text-sm'>Debes indicarnos qué día y hora te gustaría agendar cita y nosotros poder confirmar disponibilidad</p>
      </div>
      <div className='w-[72%]'>
        <p className='font-bold uppercase text-lg sm:text-[15px]'>Anticipo:</p>
        <p className='text-lg sm:text-sm'>Para agendar una cita se requiere de un anticipo del 50% del valor del paquete elegido para guardar tu lugar en la agenda y así confirmar asistencia</p>
      </div>
      <h3 className='text-4xl text-primary font-bold sm:text-xl'>IMPORTANTE</h3>
      <div className='w-[72%]'>
        <p className='font-bold uppercase text-lg sm:text-[15px]'>TIEMPO DE TOLERANCIA:</p>
        <p className='text-lg sm:text-sm' >Solo 15 min de tolerancia después del tiempo tu cita se cancela automáticamente y se pierde anticipo trata de llegar a la hora agendado o estar lista para evitar aglomeraciones</p>
      </div>
      <div className='w-[72%]'>
        <p className='font-bold uppercase text-lg sm:text-[15px]'>CANCELAR/REAGENDAR:</p>
        <p className='text-lg sm:text-sm'>Mínimo 15 días antes anticipó no reembolsable.
           <br/> Si tú cita no se confirmó con el anticipo no se agenda</p>
      </div>
        <span className='opacity-70 sm:text-xs text-center'>----NOTA: Aseguramos puntualidad y excelente atención personalizada----</span>
    </div>
  )
}

export default Conditions
