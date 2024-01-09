import React, { ReactNode } from 'react'
import Link from 'next/link'

interface Props{
  children: ReactNode,
  link: string
}
const ButtonSecundary : React.FC<Props> = ({children, link}) => {
  return (
    <Link href={`/${link}`}>
      <button className='group/button w-52 h-14 rounded-2xl group-hover/button:opacity-90 bg-maincolor text-secundary'>
        {children}
      </button>
    </Link>
  )
}

export default ButtonSecundary
