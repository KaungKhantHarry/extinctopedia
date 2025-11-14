'use client'

import { places, whereWWFWorkData } from '@/data/whereWWFWork'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const WhereWWFWork = () => {
    return (
        <div className="px-5 py-15">
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}>
                <h1 className="p-2 w-fit font-mono text-xl font-semibold tracking-tighter bg-black text-white dark:bg-white dark:text-black">
                    WHERE WWF WORK
                </h1>
                <div className="border-b-4 border-black dark:border-white"></div>
            </motion.div>
            <motion.div
                className='flex flex-col gap-5 py-5 md:grid md:grid-cols-3 xl:grid-cols-4'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}>
                    {
                        whereWWFWorkData.map((data) => (
                            <Link 
                            href={data.link} 
                            key={data.name}
                            target="_blank"
                            rel="noopener noreferrer">
                                <Image src={data.photo} alt={data.name} className='h-80 w-full'/>
                                <div className='flex flex-col gap-3 px-5 py-7 bg-black text-white dark:bg-white dark:text-black'>
                                    <h1 className='text-xl font-semibold font-mono tracking-tighter'>
                                        {data.name}
                                    </h1>
                                    <p className='text-md md:h-[72px] xl:h-[130px]'>
                                        {data.description}
                                    </p>
                                </div>
                            </Link>
                        ))
                    }
            </motion.div>
            <motion.div
                className='flex flex-col gap-5 py-5 md:grid md:grid-cols-2'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}>
                    {
                        places.map((data) => (
                            <Link 
                            href={data.link} 
                            key={data.name}
                            target="_blank"
                            rel="noopener noreferrer">
                                <Image src={data.photo} alt={data.name} className='h-80 w-full'/>
                                <div className='flex flex-col gap-3 px-5 py-7 bg-black text-white dark:bg-white dark:text-black'>
                                    <h1 className='text-xl font-semibold font-mono tracking-tighter'>
                                        {data.name}
                                    </h1>
                                    <p className='text-md md:h-[72px] xl:h-[130px]'>
                                        {data.description}
                                    </p>
                                </div>
                            </Link>
                        ))
                    }
            </motion.div>
        </div>
    )
}

export default WhereWWFWork
