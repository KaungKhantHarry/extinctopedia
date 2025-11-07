"use client"

import React, { useEffect, useState } from 'react'
import SpeciesCard from '../SpeciesCard/SpeciesCard'
import axios from 'axios';
import { ExtinctSpecies, ExtinctSpeciesResponse } from '@/type';

const SpeciesCards = () => {

    const [species, setSpecies] = useState<ExtinctSpecies[]>([]);

    const fatchExtinctSpecies = async () => {
        try {
            const { data } = await axios.get<ExtinctSpeciesResponse>(`https://extinct-api.herokuapp.com/api/v1/animal/804`);
            setSpecies(data.data);
            console.log("data", data.data);
        } catch (error) {
            console.error('Error fatching Extinct Species: ', error);
            return [];
        };
    };

    useEffect(() => {
        fatchExtinctSpecies();
    }, []);

    return (
        <div className='px-5 py-15 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5'>
            {
                species.map((s) => (
                    <SpeciesCard 
                        key={s.binomialName}
                        commonName={s.commonName} 
                        wikiLink={s.wikiLink}
                        shortDesc={s.shortDesc} 
                        binomialName={s.binomialName}
                        location={s.location}
                        lastRecord={s.lastRecord}
                        imageSrc={s.imageSrc}/>
                ))
            }
        </div>
    )
}

export default SpeciesCards
