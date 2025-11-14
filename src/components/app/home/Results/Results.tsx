'use client'

import { resultsData } from "@/data/resultsData"
import Image from "next/image"
import { motion } from 'framer-motion'

const Results = () => {
    return (
        <div className="px-5 py-15 bg-[#F7F6EF] text-[#005A25] text-center">
            <motion.h1 
                className="font-semibold text-2xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}>
                Amazon Conservation's Result
            </motion.h1>
            <motion.div 
                className="py-5 flex flex-col md:grid md:grid-cols-3"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}>
                {
                    resultsData.map((data) => (
                        <div key={data.name} className="h-[300px] bg-[#F7F6EF] flex flex-col gap-5 justify-center items-center">
                            <Image src={data.photo} alt={data.name} className="size-36 rounded-[50%]"/>
                            <h1 className="text-xl font-semibold md:h-[85px]">
                                {data.name}
                            </h1>
                        </div>
                    ))
                }
            </motion.div>
        </div>
    )
}

export default Results
