import Image from 'next/image'
import { GiEarthAfricaEurope } from "react-icons/gi";
import Link from 'next/link';
import { ExtinctSpecies } from '@/type';
import pic from '../../../../../public/species/1000_F_597479556_7bbQ7t4Z8k3xbAloHFHVdZIizWK1PdOo.jpg'

const getValidImageUrl = (url?: string | boolean) => {
    if (!url || url === "false") return pic; 
    if (typeof url === "string" && url.startsWith("http")) return url;
    return pic;
};
interface SpeciesCardProps {
  species: ExtinctSpecies;
}

const SpeciesCard = ({ species }: SpeciesCardProps) => {
    return (
        <Link href={{
                pathname: `/species/${species.binomialName}`,
                query: { species: JSON.stringify(species) },
            }}
            className='size-auto bg-white flex flex-col gap-3 rounded-2xl shadow-2xl dark:bg-gray-800'>
            <div className="relative w-full h-64">
                 <Image src={getValidImageUrl(species.imageSrc)} alt={species.commonName || "Extinct species"} className='object-cover rounded-t-2xl' fill/>
            </div>
            <div className='text-center p-5 flex flex-col gap-3'>
                <h1 className='font-semibold text-xl'>
                    {species.commonName}
                </h1>
                <p className='italic'>
                    {species.binomialName} 
                </p>
                <div className='flex items-center gap-2 justify-center'>
                    <GiEarthAfricaEurope />
                    <p>
                        {species.location}
                    </p>
                </div>
                <div className='flex gap-2 items-center justify-center'>
                    <p className='font-thin'>
                        Last Record: 
                    </p>
                    <p className='font-medium'>
                        {species.lastRecord}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default SpeciesCard
