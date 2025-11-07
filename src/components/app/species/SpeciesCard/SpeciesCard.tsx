import Image from 'next/image'
import { GiEarthAfricaEurope } from "react-icons/gi";
import React from 'react'
import Link from 'next/link';
import { ExtinctSpecies } from '@/type';
import pic from '../../../../../public/species/1000_F_597479556_7bbQ7t4Z8k3xbAloHFHVdZIizWK1PdOo.jpg'

const getValidImageUrl = (url?: string | boolean) => {
    if (!url || url === "false") return pic; 
    if (typeof url === "string" && url.startsWith("http")) return url;
    return pic;
};

const SpeciesCard = ({commonName, binomialName, location, lastRecord, imageSrc, wikiLink, shortDesc}:ExtinctSpecies) => {
    return (
        <Link href='/species/:${id}' className='size-auto bg-white flex flex-col gap-3 rounded-2xl shadow-2xl dark:bg-gray-800'>
            <div className="relative w-full h-64">
                 <Image src={getValidImageUrl(imageSrc)} alt={commonName || "Extinct species"} className='object-cover rounded-t-2xl' fill/>
            </div>
            <div className='text-center p-5 flex flex-col gap-3'>
                <h1 className='font-semibold text-xl'>
                    {commonName}
                </h1>
                <p className='italic'>
                    {binomialName} 
                </p>
                <div className='flex items-center gap-2 justify-center'>
                    <GiEarthAfricaEurope />
                    <p>
                        {location}
                    </p>
                </div>
                <div className='flex gap-2 items-center justify-center'>
                    <p className='font-thin'>
                        Last Record: 
                    </p>
                    <p className='font-medium'>
                        {lastRecord}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default SpeciesCard
