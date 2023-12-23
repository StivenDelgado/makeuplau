import About from '@/components/about/about'
import React from 'react'
import Content from '@/components/content/Content'
import MakeUps from '@/components/makeups/MakeUps'

const Main = () => {
  return (
    <main className='w-full min-h-[1400px]'>
      <Content/>
      <About/>
      <MakeUps/>
    </main>
  )
}

export default Main
