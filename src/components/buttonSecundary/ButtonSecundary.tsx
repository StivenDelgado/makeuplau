import React, { ReactNode } from 'react'
import Link from 'next/link'

interface Props{
  children: ReactNode,
  link: string
}
const ButtonSecundary : React.FC<Props> = ({children, link}) => {
  return (
    <Link href={`/${link}`} className='sm:self-center'>
      <button className='group/button w-52 h-14 sm:w-32 sm:h-10 sm:text-sm rounded-2xl group-hover/button:opacity-90 bg-maincolor text-secundary'>
        {children}
      </button>
    </Link>
  )
}

export default ButtonSecundary
