import CriticalHabitats from '@/components/app/home/CriticalHabitats/CriticalHabitats'
import HowWeProtect from '@/components/app/home/HowWeProtect/HowWeProtect'
import Intro from '@/components/app/home/Intro/Intro'
import Results from '@/components/app/home/Results/Results'
import ShopNow from '@/components/app/home/ShopNow/ShopNow'
import SuccessStories from '@/components/app/home/SuccessStories/SuccessStories'
import Support from '@/components/app/home/Support/Support'
import Sources from '@/components/common/Sources'

const Home = () => {
  return (
    <div className='h-auto'>
      <Intro />
      <CriticalHabitats />
      <Support />
      <SuccessStories />
      <ShopNow />
      <HowWeProtect />
      <Results />
      <Sources />
    </div>
  )
}

export default Home
