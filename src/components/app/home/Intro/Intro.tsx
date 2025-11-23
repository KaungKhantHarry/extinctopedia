"use client"

import { motion } from 'framer-motion';
import bgPic from '../../../../../public/home/Intro_home.avif';
import skeletons from "../../../../../public/home/elephat-skelontons.jpg";
import Image from 'next/image';

const Intro = () => {
    return (
        <div className='flex flex-col gap-2 py-10 border-b-4 border-[#00703D]'>
            <motion.h1 
                className='text-center text-3xl font-bold tracking-tight font-mono'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}>
                    All That is Gone! But Not Forgetten
            </motion.h1>
            <motion.div 
                className='flex flex-col gap-10 md:flex-row-reverse md:py-10 md:gap-0'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}>
                <div className='w-full md:w-[55%]'>
                    <Image src={bgPic} alt="background-image" />
                </div>
                <div className='px-5 md:w-[45%]'>
                    <div className='flex flex-col gap-5 py-7 border-t-4 border-[#00703D]'>
                        <p className='text-2xl md:text-3xl font-semibold tracking-tighter font-mono'>
                            What Does Extinction Mean
                        </p>
                        <p className='text-md md:text-xl tracking-tight'>
                            An animal is considered extinct when the last remaining member of its species dies out and there is not a single individual left on Earth. Causes of extinction might include an epidemic, extreme climate changes, loss of food sources, and destruction of their natural habitats. When a large number of species goes out of existence in some major calamity, it is called an extinction event.
                        </p>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                className='flex flex-col gap-10 md:flex-row md:py-10 md:gap-0'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}>
                <div className='w-full md:w-[55%]'>
                    <Image src={skeletons} alt="background-image" />
                </div>
                <div className='px-5 md:w-[45%]'>
                    <div className='flex flex-col gap-5 py-7 border-t-4 border-[#00703D]'>
                        <p className='text-2xl md:text-3xl font-semibold tracking-tighter font-mono'>
                            Know If a Species Has Gone Extinct
                        </p>
                        <p className='text-md md:text-xl tracking-tight'>
                            Multiple wildlife conservation organizations keep track of different species and their population trends, taking measures to help them survive. The International Union for Conservation of Nature and Natural Resources (IUCN), established in 1948, is one of the most authoritative among these. <br></br> <br></br>
                            They classify animals in various conservation statuses (depending on their number and population trends), including Least Concern, Threatened, Endangered, and lastly Extinct. This makes it easy for us to find out any animals Conservation Status.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Intro
