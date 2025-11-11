'use client'

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import pic from '../../../../../public/species/1000_F_597479556_7bbQ7t4Z8k3xbAloHFHVdZIizWK1PdOo.jpg';
import { GiEarthAfricaEurope } from "react-icons/gi";
import Link from 'next/link';

const getValidImageUrl = (url?: string | boolean) => {
    if (!url || url === "false") return pic; 
    if (typeof url === "string" && url.startsWith("http")) return url;
    return pic;
};

const SpeciesDetail = () => {

    const searchParams = useSearchParams();
    const speciesData = searchParams.get("species");
    const species = speciesData ? JSON.parse(speciesData) : null;

    return (
        <div className='p-5'>
            {species ? (
                <div className="flex flex-col gap-5">
                    <p className='text-3xl font-bold text-center'>{species.commonName}</p>
                    <p className='text-xl font-semibold text-center'>{species.binomialName}</p>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className="relative w-full h-64 md:w-[50%] md:h-auto xl:h-96">
                            <Image src={getValidImageUrl(species.imageSrc)} alt={species.commonName || "Extinct species"} className='object-cover rounded-xl' fill/>
                        </div>
                        <div className='w-full md:w-[50%]'>
                            <div>
                                <p>
                                    {species.shortDesc}
                                </p>
                            </div>
                            <div className='flex flex-col justify-start gap-5 py-5'>
                                <div className='flex gap-2 items-center '>
                                    <GiEarthAfricaEurope />
                                    <p>
                                        {species.location}
                                    </p>
                                </div>
                                <div className='flex gap-2'>
                                    <p className='font-thin'>
                                        Last Record: 
                                    </p>
                                    <p className='font-medium'>
                                        {species.lastRecord}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <Link 
                                    href={species.wikiLink} 
                                    className='italic text-[#519B89]'
                                    target="_blank"
                                    rel="noopener noreferrer">
                                        Learn more at Wikipedia Page
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between md:justify-start md:gap-10'>
                        <button className= 'bg-[#A9C3F7] px-5 py-2 font-mono font-semibold dark:text-black'>
                            Save
                        </button>
                        <Link href="/species" className= 'bg-[#A9C3F7] px-5 py-2 font-mono font-semibold dark:text-black'>
                            Go Back
                        </Link>
                    </div>
                </div>
            ) : (
                <p>No data available for this species.</p>
            )}
        </div>
    )
}

export default SpeciesDetail
