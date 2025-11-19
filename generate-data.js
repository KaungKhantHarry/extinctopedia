const fs = require('fs');
const axios = require('axios'); 

async function fetchAndStoreSpecies(totalCount) {
    console.log(`Fetching ${totalCount} species...`);
    try {
        const response = await axios.get(`https://extinct-api.herokuapp.com/api/v1/animal/${totalCount}`);
        const allSpeciesData = response.data; 

        fs.writeFileSync(
            './src/data/local-species-data.json',
            JSON.stringify(allSpeciesData, null, 2)
        );

        console.log(`Successfully saved ${allSpeciesData.length} species to local-species-data.json`);
    } catch (error) {
        console.error("Error fetching or storing data:", error.message);
    }
}

fetchAndStoreSpecies(804);