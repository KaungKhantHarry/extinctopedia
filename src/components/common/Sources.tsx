'use client'

import { resourcesData } from "@/data/resourcesData";
import Link from "next/link";
import { useState } from "react";

const Sources = () => {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="w-full h-auto px-5 pb-25 pt-10">
            <button onClick={() => setOpen((prev) => !prev)} 
                    className="w-full"
                >
                { 
                    open ? 
                        <div className="flex justify-between text-md border-t-2 border-black dark:border-white">
                            <p>Sources</p>
                            <p>▼</p>
                        </div>
                    : 
                        <div className="flex justify-between text-md border-t-2 border-black dark:border-white">
                            <p>Sources</p>
                            <p>▲</p>
                        </div>
                }
            </button>
            <div
                className={`absolute mt-2 transition-opacity duration-300 ${
                open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            >
                {
                    resourcesData.map((data) => (
                        <div className="flex flex-col flex-start gap-3 " key={data.name}>
                           <Link 
                                href={data.link} 
                                target="_blank"
                                rel="noopener noreferrer">
                                {data.link} 
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Sources
