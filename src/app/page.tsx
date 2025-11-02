import CriticalHabitats from '@/components/app/home/CriticalHabitats/CriticalHabitats'
import Intro from '@/components/app/home/Intro/Intro'
import Support from '@/components/app/home/Support/Support'
import React from 'react'

const Home = () => {
  return (
    <div className='h-auto'>
      <Intro />
      <CriticalHabitats />
      <Support />
    </div>
  )
}

export default Home
