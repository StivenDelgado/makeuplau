import About from '../components/about/about'
import React from 'react'
import Content from '../components/content/Content'
import MakeUps from '../components/makeups/MakeUps'
import Conditions from '../components/conditions/Conditions'

const Main = () => {
  return (
    <main className='w-full min-h-[1400px]'>
      <Content/>
      <About/>
      <MakeUps/>
      <Conditions/>
    </main>
  )
}

export default Main
