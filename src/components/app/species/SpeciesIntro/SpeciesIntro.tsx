'use client'

import React from 'react'
import bgPic from '../../../../../public/species/Amazon-Rainforests-Amazonia-South-America.jpg'
import { motion } from 'framer-motion'

const SpeciesIntro = () => {
    return (
        <div className='relative w-full h-auto bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${bgPic.src})` }}>
            <div className="absolute inset-0 bg-black/70 backdrop-blur-xs"></div>
            <div className='py-15 px-5 flex flex-col gap-7'>
                <motion.h1
                    className='relative text-center font-semibold text-white font-mono text-2xl tracking-tighter md:text-3xl xl:text-4xl'
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}>
                    A Promise to the Fallen
                </motion.h1>
                <motion.p 
                    className='relative text-center text-white text-md tracking-wide md:text-xl xl:text-xl'
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}>
                    Every creature here once walked, swam, or flew across our planet. But Gone is Gone. Here lie the memories of those who vanished from Earth. Once lost, a species never comes back.
                </motion.p>
                <motion.p 
                    className='relative text-center text-white text-md tracking-wide md:text-xl xl:text-xl'
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}>
                    We remember them not as shadows of the past,
                    but as voices calling us to protect what remains. Let’s honor them through action to safeguard those still with us.
                    For them, and for the future, Let’s Promise: we will not let the next name be added here.
                </motion.p>
            </div>
        </div>
    )
}

export default SpeciesIntro
