"use client"

import React from 'react'
import { motion } from 'framer-motion'
import bgPic from '../../../../../public/home/c464dc16fa164a1eba067271a1253ddb.jpeg'

const Intro = () => {
    return (
        <div className='w-full h-auto bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${bgPic.src})` }}>
            <h1 className='font-serif text-5xl text-white text-center py-10'>
                All That is Gone! But Not Forgetten
            </h1>
            <div className='w-[70%] flex flex-col justify-start p-[50px] gap-5'>
                <motion.h1 
                    className='text-3xl text-white'
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}>
                    What Does Extinction Mean
                </motion.h1>
                <motion.p 
                    className='text-xl text-white leading-relaxed tracking-wide'
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}>
                    An animal is considered extinct when the last remaining member of its species dies out and there is not a single individual left on Earth. Causes of extinction might include an epidemic, extreme climate changes, loss of food sources, and destruction of their natural habitats. When a large number of species goes out of existence in some major calamity, it is called an extinction event
                </motion.p>
            </div>
            <div className='flex py-[150px] px-[50px] gap-4'>
                <div className='w-[50%]'>
                    <motion.h1 
                        className='text-center text-white font-bold tracking-wider text-3xl'
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}>
                        Know If a Species Has Gone Extinct
                    </motion.h1>
                </div>
                <motion.div 
                    className='w-[50%] text-white font-semibold leading-relaxed tracking-wide text-xl'
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}>
                    <p>
                        Multiple wildlife conservation organizations keep track of different species and their population trends, taking measures to help them survive. The International Union for Conservation of Nature and Natural Resources (IUCN), established in 1948, is one of the most authoritative among these.
                    </p>
                    <p>
                        They classify animals in various conservation statuses (depending on their number and population trends), including Least Concern, Threatened, Endangered, and lastly Extinct. This makes it easy for us to find out any animals Conservation Status.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default Intro
