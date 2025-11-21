"use client"

import { auth, db } from "@/firebase/config";
import { ExtinctSpecies } from "@/type";
import { onAuthStateChanged, User } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";
import { motion } from 'framer-motion';
import SpeciesCard from "../../species/SpeciesCard/SpeciesCard";

const FavoritesCards = () => {

    const [savedSpecies, setSavedSpecies] = useState<ExtinctSpecies[]>([]);
    const [user, setUser] = useState<User | null>(null);

    const fatchSaved = async () => {
        if(!user) return;

        const ref = collection(db, "users", user.uid, "savedSpecies");
        const snapshot = await getDocs(ref);

        const list = snapshot.docs.map((d) => ({
            ...(d.data() as ExtinctSpecies)
        }));

        setSavedSpecies(list);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        fatchSaved();
    },[user]);

    const handleRemove = async (binomialName: string) => {
        if (!user) return; 

        await deleteDoc(doc(db, "users", user.uid, "savedSpecies", binomialName));
        setSavedSpecies((prev) => prev.filter((s) => s.binomialName !== binomialName));
    };

    const renderedSavedSpecies = useMemo(() =>
        {
            return savedSpecies.map((s) => (
                <div
                    key={s.binomialName}
                    className="flex flex-col bg-white shadow-md rounded-lg p-4 mb-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                    >
                    <div className="xl:h-[500px]">
                            <SpeciesCard species={s} isSaved={true} />
                    </div>
                   
                    <button
                        onClick={() => handleRemove(s.binomialName)}
                        className="mt-4 bg-red-600 text-white font-semibold py-2 rounded-md hover:bg-red-700 transition-colors duration-300"
                        aria-label={`Remove ${s.commonName} from favourites`}
                    >
                        Remove
                    </button>
                </div>
            ));
        },
        [savedSpecies]
    );

    return (
        <div className="px-5 py-15">
            <motion.h1
                className='relative text-center font-semibold font-mono text-2xl tracking-tighter md:text-3xl xl:text-4xl pb-10'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}>
                Favorites Sepcies
            </motion.h1>
            {
                !user && 
                    <p className="text-center font-mono text-xl tracking-tight">
                        Please log in to view your favourites.
                    </p>
            }
            {
                user && savedSpecies.length === 0 && (
                    <p className="text-center font-mono text-xl tracking-tight">
                        You haven't saved any species yet.
                    </p>
                )
            }
            <div className='px-5 py-15 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5'>
                {renderedSavedSpecies}
            </div>
        </div>
    )
}

export default FavoritesCards
