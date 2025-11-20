"use client";

import { useEffect, useMemo, useRef, useState } from 'react';
import SpeciesCard from '../SpeciesCard/SpeciesCard';
import { ExtinctSpecies } from '@/type';
import allSpeciesData from '../../../../data/local-species-data.json'; 

const ALL_SPECIES: ExtinctSpecies[] = allSpeciesData.data as ExtinctSpecies[];
const TOTAL_SPECIES_COUNT = ALL_SPECIES.length;
const BATCH_SIZE = 12;

const SpeciesCards = () => {
    const [species, setSpecies] = useState<ExtinctSpecies[]>([]);
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [sortBy, setSortBy] = useState<string>("");

    const loaderDivRef = useRef<HTMLDivElement | null>(null);
    const isFetchingRef = useRef(false);

    const fatchExtinctSpecies = async (pageNum: number) => {
        if (isFetchingRef.current || !hasMore) return;

        try {
            isFetchingRef.current = true;
            setLoading(true);

            const startIndex = (pageNum - 1) * BATCH_SIZE;
            
            if (startIndex >= TOTAL_SPECIES_COUNT) {
                setHasMore(false);
                return;
            }

            const endIndex = startIndex + BATCH_SIZE;

            const batchData = ALL_SPECIES.slice(startIndex, endIndex);

            await new Promise(resolve => setTimeout(resolve, 300));

            setSpecies((prev) => [...prev, ...batchData]);

            if (endIndex >= TOTAL_SPECIES_COUNT) {
                setHasMore(false);
            }
        } catch (error) {
            console.error('Error processing local species data: ', error);
        } finally {
            isFetchingRef.current = false;
            setLoading(false);
        }
    };

    useEffect(() => {
        fatchExtinctSpecies(page);
    }, [page]);

    useEffect(() => {
        if (!hasMore) return; 

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isFetchingRef.current) {
                    setPage((prev) => prev + 1);
                }
            },
            { threshold: 0.1 } 
        );

        const currentLoader = loaderDivRef.current;
        if (currentLoader) observer.observe(currentLoader);

        return () => {
            if (currentLoader) observer.unobserve(currentLoader);
        };
    }, [hasMore]); 

    const sortSpecies = [...species].sort((a: ExtinctSpecies, b: ExtinctSpecies) => {
        if(sortBy === "") {
            return 0;
        };

        switch (sortBy) {
            case "commonNameAZ":
                return a.commonName.localeCompare(b.commonName);

            case "lastRecord":
                return new Date(b.lastRecord).getTime() - new Date(a.lastRecord).getTime();

            default:
                return 0;
        }
    });

    const renderedItems = useMemo(() =>
        {
            return sortSpecies.map((s) => (
                <SpeciesCard 
                    key={s.binomialName}
                    species={s}/>
            ));
        },
        [species, sortBy]
    );

    return (
        <>
            <div className="flex justify-end px-5 pt-10">
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border p-2 rounded-md"
                >
                    <option value="">Default (No sort)</option>
                    <option value="lastRecord">Latest Records</option>
                    <option value="commonNameAZ">Common Name (A → Z)</option>
                </select>
            </div>

            <div className='px-5 py-15 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5'>
                {renderedItems}
            </div>
            {hasMore && (
                <div 
                    ref={loaderDivRef} 
                    className="h-10 flex justify-center items-center p-4">
                    {loading && <p className="text-center">Loading more...</p>}
                </div>
            )}
        </>
    )
}

export default SpeciesCards;