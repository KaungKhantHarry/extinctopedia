import CriticalHabitats from '@/components/app/home/CriticalHabitats/CriticalHabitats'
import Intro from '@/components/app/home/Intro/Intro'
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
      <Sources />
    </div>
  )
}

export default Home
