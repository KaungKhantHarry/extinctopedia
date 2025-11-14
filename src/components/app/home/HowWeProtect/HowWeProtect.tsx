'use client'

import { howWeProtectData } from "@/data/howWeProtectData"
import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'

const HowWeProtect = () => {
    return (
        <div className="px-5 py-15 bg-[#EBE8D4] text-[#005A25] text-center">
            <motion.h1 
                className="font-semibold text-2xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}>
                How Amazon Conservation Protect Wild Places
            </motion.h1>
            <motion.div className="flex flex-col gap-10 py-5 md:grid md:grid-cols-2 xl:grid-cols-3">
                {
                    howWeProtectData.map((data) => (
                        <div key={data.name} className="h-[400px] bg-[#EBE8D4] flex flex-col gap-5 justify-center items-center">
                            <Image src={data.photo} alt={data.name} className="size-36 rounded-[50%]"/>
                            <h1 className="text-xl font-semibold">
                                {data.name}
                            </h1>
                            <p className="text-md font-semibold h-[150px]">
                                {data.description}
                            </p>
                        </div>
                    ))
                }
            </motion.div>
            <Link 
                href="https://www.amazonconservation.org/?form=donate"
                className= 'bg-[#A9C3F7] px-5 py-2 font-mono font-semibold dark:text-black'
                target="_blank"
                rel="noopener noreferrer">
                Donate at Amazon Conservation
            </Link>
        </div>
    )
}

export default HowWeProtect
