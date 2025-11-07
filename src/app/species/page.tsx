import SpeciesCards from '@/components/app/species/SpeciesCards/SpeciesCards'
import SpeciesIntro from '@/components/app/species/SpeciesIntro/SpeciesIntro'
import React from 'react'

const SpeciesPage = () => {
    return (
        <div className='h-auto w-full'>
            <SpeciesIntro />
            <SpeciesCards />
        </div>
    )
}

export default SpeciesPage
