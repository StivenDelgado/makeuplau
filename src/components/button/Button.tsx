import React, {forwardRef} from 'react'

interface MyComponentProps {
  children: React.ReactNode;
  handler?: Function
}

const Button : React.FC<MyComponentProps> = ({children,  handler = () => {}}) => {
  return (
    <button className='w-52 h-14 rounded-2xl hover:opacity-90 bg-primary text-maincolor sm:w-40 sm:h-10 sm:text-base' onClick={() => handler()}>
      {children}
    </button>
  )
}

export default Button
