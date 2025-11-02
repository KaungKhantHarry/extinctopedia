import CriticalHabitats from '@/components/app/home/CriticalHabitats/CriticalHabitats'
import Intro from '@/components/app/home/Intro/Intro'
import React from 'react'

const Home = () => {
  return (
    <div className='h-auto'>
      <Intro />
      <CriticalHabitats />
    </div>
  )
}

export default Home
