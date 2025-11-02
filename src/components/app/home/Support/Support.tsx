import React from 'react'
import rainforest from '../../../../../public/home/Rainforest-Aerial-Background2-aspect-ratio-1440-780.webp'
import redpanda from '../../../../../public/home/red-panda-aspect-ratio-500-580.webp'
import Image from 'next/image'
import Link from 'next/link'

const Support = () => {
  return (
    <div className='relative w-full h-auto bg-cover bg-center bg-no-repeat text-white'
        style={{ backgroundImage: `url(${rainforest.src})` }}>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        <h1 className='relative pt-10 font-mono text-2xl tracking-tight text-center text-white font-semibold'>
            Support the communities who are trying to protect
        </h1>
        <div className='relative w-full flex flex-col px-5 py-15 gap-10 md:flex-row xl:flex-row'>
            <div className='flex flex-col gap-10 md:w-[40%] xl:w-[50%]'>
                <Image src={redpanda} alt='red-panda'/>
            </div>
            <div className='flex flex-col gap-5 md:w-[60%] xl:w-[50%]'>
                <p className='w-fit border-r-2 border-b-2 border-orange-500 pr-4 pb-4 font-mono font-semibold'>
                    WORLDWID IMPACT
                </p>
                <h1 className='pt-10 font-serif text-4xl text-[#A9CB6A] font-bold'>
                    Save species from extinction
                </h1>
                <p className='pt-5 font-semibold leading-relaxed tracking-wide'>
                    A million species are at risk of extinction this century, each unique and irreplaceable. The leading cause is habitat destruction, and the most valuable habitat is rainforest.
                </p>
                <h1 className='pt-10 font-serif text-4xl text-[#A9CB6A] font-bold'>
                    Save rainforests to stop climate change
                </h1>
                <p className='py-5 font-semibold leading-relaxed tracking-wide'>
                    We cannot stop climate change without saving tropical forests and keeping historical carbon safely locked up in the wood and soil while removing excess CO2 from the air.
                </p>
                <Link href="/species" className= 'w-fit bg-[#A9C3F7] px-5 py-2 font-mono font-semibold dark:text-black'>
                    See Extinct Species
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Support
