import React, {forwardRef} from 'react'

const Button = forwardRef(({children, handler = () => {}}) => {
  return (
    <button className='w-52 h-14 rounded-2xl hover:opacity-90 bg-primary text-maincolor' onClick={() => handler()}>
      {children}
    </button>
  )
})

export default Button
