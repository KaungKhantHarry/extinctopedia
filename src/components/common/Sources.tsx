'use client'

import { resourcesData } from "@/data/resourcesData";
import Link from "next/link";
import { useState } from "react";

const Sources = () => {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="w-full h-auto px-5 py-10">
            <button 
                onClick={() => setOpen((prev) => !prev)} 
                className="w-full"
            >
                {open ? (
                    <div className="font-mono bg-black px-3 text-white dark:bg-white dark:text-black text-xl font-semibold py-2 flex justify-between text-md border-t-2 border-black dark:border-white">
                        <p>Sources</p>
                        <p>▼</p>
                    </div>
                ) : (
                    <div className="font-mono text-xl px-3 font-semibold py-2 flex justify-between text-md border-t-2 border-black dark:border-white">
                        <p>Sources</p>
                        <p>▲</p>
                    </div>
                )}
            </button>

            <div
                className={`transition-all duration-500 overflow-hidden 
                    ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                `}
            >
                <div className="mt-2">
                    {resourcesData.map((data) => (
                        <div className="flex flex-col flex-start gap-3 px-5" key={data.name}>
                            <Link 
                                href={data.link} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-xl tracking-wide hover:underline hover:text-[#005A25]"
                            >
                                {data.link}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sources
