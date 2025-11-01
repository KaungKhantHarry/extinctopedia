import Link from 'next/link'
import React from 'react'
import { RiTreeFill } from "react-icons/ri";
import { GiElephant } from "react-icons/gi";
import { GiEarthAfricaEurope } from "react-icons/gi";

const CriticalHabitats = () => {
    return (
        <div className='flex flex-col xl:flex-row'>
            <div className='p-5 flex flex-col gap-5'>
                <div>
                    <div className="w-full flex gap-2 justify-center items-center">
                        <RiTreeFill className="size-[100px] text-[#BA5500]" />
                        <p className="text-center font-mono font-semibold text-3xl">
                            57.8M
                        </p>
                    </div>
                    <p className="w-fit mx-auto text-center font-semibold">
                        acres protected across the globe
                    </p>
                </div>
                <div>
                    <div className="w-full flex gap-2 justify-center items-center">
                        <GiElephant className="size-[100px] text-[#5E7A28]"/>
                        <p className="text-center font-mono font-semibold text-3xl">
                            3,335
                        </p>
                    </div>
                    <p className="w-fit mx-auto text-center font-semibold">
                        threatened species protected
                    </p>
                </div>
                <div>
                    <div className="w-full flex gap-2 justify-center items-center">
                        <GiEarthAfricaEurope className="size-[100px] text-[#4D6CA2]"/>
                        <p className="text-center font-mono font-semibold text-3xl">
                            99%
                        </p>
                    </div>
                    <p className="w-fit mx-auto text-center font-semibold">
                        of the rainforest remains intact
                    </p>
                </div>
            </div>
            <div className='px-5 py-15'>
                <p className='w-fit border-r-2 border-b-2 border-green-700 pr-4 pb-4 font-mono font-semibold'>
                    Do you know?
                </p>
                <h1 className='pt-10 font-serif text-2xl text-green-700 font-bold'>
                    Preserving the critical habitats around the globe
                </h1>
                <p className='pt-10 font-semibold leading-relaxed tracking-wide'>
                    Most species on Earth are rare … And rarity is very concentrated. … we found that we need only about 1.2 % of the Earth’s surface to head off the sixth great extinction of life on Earth.
                </p>
                <p className='pt-5 pb-15 text-end italic text-sm'>
                    Eric Dinerstein(Frontiers in Science, 2024)
                </p>
                <Link href="/species" className= 'bg-[#A9C3F7] px-5 py-2 font-mono font-semibold'>
                    See Extinct Species
                </Link>
            </div>
        </div>
    )
}

export default CriticalHabitats
