'use client'

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { GiEarthAfricaEurope } from "react-icons/gi";
import Link from 'next/link';
import { getDefaultCommonName, getValidImageUrl } from '../SpeciesCard/SpeciesCard';
import { useAuth } from '@/context/AuthContext';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { useEffect, useState } from 'react';

const SpeciesDetail = () => {

    const searchParams = useSearchParams();
    const speciesData = searchParams.get("species");
    const species = speciesData ? JSON.parse(speciesData) : null;
    const { user } = useAuth();
    const [isSaved, setIsSaved] = useState<boolean>(false);

    const handleSaveSpeciesToFav = async () => {
        if(!user) {
            alert("If you want to save Species to Favouriate Page, you have to log in first!");
            return; 
        }   
        try {
            await setDoc(doc(db, "users", user.uid, "savedSpecies", species.binomialName), {
                binomialName: species.binomialName,
                commonName: species.commonName,
                location: species.location,
                wikiLink: species.wikiLink,
                lastRecord: species.lastRecord, 
                imageSrc: species.imageSrc,
                shortDesc: species.shortDesc,
                savedAt: Date.now(),
            });

            setIsSaved(true);
            alert("Species saved!");
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    useEffect(() => {
        if (!user) {
            setIsSaved(false);
            return;
        }

        const checkIfSaved = async () => {
        const docRef = doc(db, "users", user.uid, "savedSpecies", species.binomialName);
        const docSnap = await getDoc(docRef);

        setIsSaved(docSnap.exists());
        };

        checkIfSaved();
    }, [user, species.binomialName]);

    return (
        <div className='p-5'>
            {species ? (
                <div className="flex flex-col gap-5">
                    <p className='text-3xl font-bold text-center'>{getDefaultCommonName(species.commonName)}</p>
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
                        {
                            isSaved ? (
                                <button disabled className="bg-[#A9C3F7] px-5 py-2 font-mono font-semibold dark:text-black">
                                    Saved in Favorites
                                </button>
                            ) : (
                                <button 
                                    onClick={handleSaveSpeciesToFav}
                                    className= 'bg-[#A9C3F7] pointer px-5 py-2 font-mono font-semibold dark:text-black'>
                                    Save
                                </button>
                            )
                        }
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
