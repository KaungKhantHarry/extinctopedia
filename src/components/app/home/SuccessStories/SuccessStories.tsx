'use client'

import { successStoriesData } from '@/data/successStoriesData';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGreaterThan } from "react-icons/fa";

const SuccessStories = () => {
    return (
        <div className="px-5 py-15">
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}>
                <h1 className="p-2 w-fit font-mono text-xl font-semibold tracking-tighter bg-black text-white dark:bg-white dark:text-black">
                    SUCCESS STORIES OF WWF
                </h1>
                <div className="border-b-4 border-black dark:border-white"></div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className='pt-5 flex flex-col gap-5 md:grid md:grid-cols-2 xl:grid-cols-4'>
                {
                    successStoriesData.map((data) => (
                        <Link 
                            href={data.link} 
                            key={data.name}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='group overflow-hidden'>
                            <div className='overflow-hidden'>
                                <Image src={data.photo} alt={data.name} className='h-90 xl:h-[291px] object-cover transition-transform duration-500 group-hover:scale-125'/>
                            </div>
                            <div className='p-3 flex justify-between items-center bg-black text-white dark:bg-white dark:text-black md:h-20 xl:h-32'>
                                <p className='font-mono text-xl tracking-tighter font-semibold'>
                                    {data.name}
                                </p>
                                <p className='text-md font-semibold'>
                                    <FaGreaterThan />
                                </p>
                            </div>
                        </Link>
                    ))
                }
            </motion.div>
        </div>
    )
}

export default SuccessStories
