"use client"

import React, { useEffect, useMemo, useRef, useState } from 'react'
import SpeciesCard from '../SpeciesCard/SpeciesCard'
import axios from 'axios';
import { ExtinctSpecies, ExtinctSpeciesResponse } from '@/type';

const SpeciesCards = () => {

    const [species, setSpecies] = useState<ExtinctSpecies[]>([]);
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const loaderDivRef = useRef<HTMLDivElement | null>(null);
    const loaderRef = useRef(false);

    const fatchExtinctSpecies = async (pageNum: number) => {
        try {
            loaderRef.current = true;
            setLoading(true);

            const batchSize = 12;
            const start = (pageNum - 1) * batchSize + 1;
            const end = start + batchSize - 1;               

            const requests = [];
            for (let i = start; i <= end && i <= 804; i++) {
                requests.push(axios.get(`https://extinct-api.herokuapp.com/api/v1/animal/${i}`));
            }

            const results = await Promise.all(requests);
            const batchData = results.map((res) => res.data.data[0]);

            setSpecies((prev) => [...prev, ...batchData]);
            if (end >= 804) setHasMore(false);
        } catch (error) {
            console.error('Error fatching Extinct Species: ', error);
            return [];
        } finally {
            loaderRef.current = false;
            setLoading(false);
        };
    };

    useEffect(() => {
        fatchExtinctSpecies(page);
    }, [page]);

    useEffect(() => {
        if (!hasMore) return;

        const observer = new IntersectionObserver(
            (entries) => {
            if (entries[0].isIntersecting && !loaderRef.current) {
                setPage((prev) => prev + 1);
            }
            },
            { threshold: 1.0 }
        );

        const currentLoader = loaderDivRef.current;
        if (currentLoader) observer.observe(currentLoader);
        return () => {
            if (currentLoader) observer.unobserve(currentLoader);
        };
    }, [hasMore, loading]);

    const renderedItems = useMemo(() =>
        {
            return species.map((s) => (
                <SpeciesCard 
                    key={s.binomialName}
                    commonName={s.commonName} 
                    wikiLink={s.wikiLink}
                    shortDesc={s.shortDesc} 
                    binomialName={s.binomialName}
                    location={s.location}
                    lastRecord={s.lastRecord}
                    imageSrc={s.imageSrc}/>
            ));
        },
        [species]
    );

    return (
        <>
            {loading && <p className="text-center mt-4">Loading more...</p>}
            <div className='px-5 py-15 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5'>
                {renderedItems}
            </div>
            <div ref={loaderDivRef} className="h-10"></div>
        </>
    )
}

export default SpeciesCards
