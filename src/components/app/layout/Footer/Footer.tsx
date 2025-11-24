"use client"

import { footerData, footerIntro } from "@/data/footerData"
import Link from "next/link";
import { useState } from "react";

const Footer = () => {

    const [open, setOpen] = useState<number | null>(null);

    return (
        <div className="px-5 pt-15 flex flex-col gap-10 bg-[#F7F6EF]">
            
            {footerIntro.map((data) => (
                <div className="flex flex-col gap-5" key={data.name}>
                    <p className="text-center text-md text-gray-600 font-mono tracking-tight italic dark:text-gray-400">
                        {data.text}
                    </p>
                </div>
            ))}

            {footerData.map((data, index) => (
                <div className="w-full h-auto flex flex-col" key={data.header}>
                    <button 
                        onClick={() =>
                            setOpen(open === index ? null : index)
                        }
                        className="w-full"
                    >
                        {open === index ? (
                            <div className="font-mono bg-black px-3 text-white dark:bg-white dark:text-black text-xl font-semibold py-2 flex justify-between text-md border-t-2 border-black dark:border-white">
                                <p>{data.header}</p>
                                <p>▼</p>
                            </div>
                        ) : (
                            <div className="font-mono text-white bg-black text-xl px-3 font-semibold py-2 flex justify-between text-md border-t-2 border-black dark:border-white">
                                <p>{data.header}</p>
                                <p>▲</p>
                            </div>
                        )}
                    </button>

                    <div
                        className={`transition-all duration-500 overflow-hidden 
                            ${open === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                        `}
                    >
                        <div className="mt-2">
                            {data.contents.map((data) => (
                                <div className="flex flex-col flex-start gap-3 px-5" key={data.name}>
                                    <Link 
                                        href={data.link} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-mono dark:text-black text-md tracking-wide hover:underline hover:text-[#005A25]"
                                    >
                                        {data.name}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
            <div className="w-full py-5 flex justify-center items-center gap-2 border-t-2 border-gray-200 dark:border-gray-800">
                <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
                    ©{new Date().getFullYear()} Design and Developed by 
                </p>
                <Link 
                    href="https://www.linkedin.com/in/kaung-khant-win-b4109522a/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-md tracking-tighter font-semibold text-[#005A25] hover:text-[#053117]">
                    Kaung Khant Harry
                </Link>
            </div>
        </div>
    );
}

export default Footer;