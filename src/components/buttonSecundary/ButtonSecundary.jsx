import React from 'react'
import Link from 'next/link'

const ButtonSecundary = ({children, link}) => {
  return (
    <Link href={`/${link}`}>
      <button className='w-52 h-14 rounded-2xl hover:opacity-90 bg-maincolor text-secundary'>
        {children}
      </button>
    </Link>
  )
}

export default ButtonSecundary
