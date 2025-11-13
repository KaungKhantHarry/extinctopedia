"use client"

import { shopNowData } from '@/data/shopNowData'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const ShopNow = () => {
    return (
        <div className="px-5 py-15">
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}>
                <h1 className="p-2 w-fit font-mono text-xl font-semibold tracking-tighter bg-black text-white dark:bg-white dark:text-black">
                    SHOP FOR YOUR WORLD AT WWF
                </h1>
                <div className="border-b-4 border-black dark:border-white"></div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className='pt-5 flex flex-col gap-5 md:grid md:grid-cols-2'>
                {
                    shopNowData.map((data) => (
                        <Link 
                            href={data.link} 
                            key={data.name}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='xl:flex xl:flex-row'>
                            <Image src={data.photo} alt={data.name} className='h-80 xl:w-[65%]'/>
                            <div className='flex flex-col gap-3 px-5 py-7 bg-black text-white dark:bg-white dark:text-black xl:w-[35%] xl:h-full xl:items-center xl:justify-center'>
                                <p className='font-mono text-xl tracking-tighter font-semibold'>
                                    {data.name}
                                </p>
                                <p className='text-md font-semibold underline'>
                                    Shop Now
                                </p>
                            </div>
                        </Link>
                    ))
                }
            </motion.div>
        </div>
    )
}

export default ShopNow
