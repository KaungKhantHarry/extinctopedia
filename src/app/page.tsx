import CriticalHabitats from '@/components/app/home/CriticalHabitats/CriticalHabitats'
import Intro from '@/components/app/home/Intro/Intro'
import Support from '@/components/app/home/Support/Support'
import Sources from '@/components/common/Sources'
import React from 'react'

const Home = () => {
  return (
    <div className='h-auto'>
      <Intro />
      <CriticalHabitats />
      <Support />
      <Sources />
    </div>
  )
}

export default Home
