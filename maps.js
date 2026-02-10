// Générateur de cartes pour les questions de géographie - Images Internet

// Fonction pour créer la carte des DROM avec mise en évidence
function generateDROMMap(highlightTarget) {
    const dromData = {
        guadeloupe: {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Guadeloupe_-_Basse-Terre_-_map.svg/400px-Guadeloupe_-_Basse-Terre_-_map.svg.png",
            label: "Guadeloupe",
            region: "Caraïbes"
        },
        martinique: {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Martinique_department_location_map.svg/400px-Martinique_department_location_map.svg.png",
            label: "Martinique",
            region: "Caraïbes"
        },
        guyane: {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/French_Guiana_-_administrative_divisions_-_de_-_colored.svg/400px-French_Guiana_-_administrative_divisions_-_de_-_colored.svg.png",
            label: "Guyane",
            region: "Amérique du Sud"
        },
        reunion: {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Reunion_-_map.svg/400px-Reunion_-_map.svg.png",
            label: "La Réunion",
            region: "Océan Indien"
        },
        mayotte: {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Mayotte_-_map.svg/400px-Mayotte_-_map.svg.png",
            label: "Mayotte",
            region: "Océan Indien"
        }
    };
    
    const selectedDrom = dromData[highlightTarget] || dromData.guadeloupe;
    
    return `
        <div class="geo-map-container">
            <div style="background: linear-gradient(180deg, #0c4a6e 0%, #075985 100%); padding: 20px; border-radius: 8px;">
                <h3 style="text-align: center; color: #e0f2fe; margin-top: 0; font-size: 18px; font-weight: 700;">
                    🌍 Départements et Régions d'Outre-Mer (DROM)
                </h3>
                <div style="text-align: center; margin: 15px 0;">
                    <img src="${selectedDrom.image}" alt="${selectedDrom.label}" 
                        style="max-width: 100%; height: auto; max-height: 300px; border-radius: 6px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
                </div>
                <div style="text-align: center; background: rgba(15, 23, 42, 0.95); padding: 12px; border-radius: 6px; border: 2px solid #fbbf24;">
                    <p style="margin: 0; color: #fbbf24; font-weight: 700; font-size: 16px;">
                        ${selectedDrom.label}
                    </p>
                    <p style="margin: 5px 0 0 0; color: #94a3b8; font-size: 12px;">
                        ${selectedDrom.region}
                    </p>
                </div>
            </div>
        </div>
    `;
}

// Fonction pour créer la carte des régions françaises avec mise en évidence
function generateRegionsMap(highlightTarget) {
    const regions = {
        'ile-de-france': { 
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/%C3%8Ele-de-France_region_location_map.svg/400px-%C3%8Ele-de-France_region_location_map.svg.png",
            label: 'Île-de-France',
            capital: 'Paris'
        },
        'hauts-de-france': {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Hauts-de-France_region_location_map.svg/400px-Hauts-de-France_region_location_map.svg.png",
            label: 'Hauts-de-France',
            capital: 'Lille'
        },
        'normandie': {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Normandie_region_location_map.svg/400px-Normandie_region_location_map.svg.png",
            label: 'Normandie',
            capital: 'Rouen'
        },
        'bretagne': {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Bretagne_region_location_map.svg/400px-Bretagne_region_location_map.svg.png",
            label: 'Bretagne',
            capital: 'Rennes'
        },
        'pays-de-la-loire': {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Pays_de_la_Loire_region_location_map.svg/400px-Pays_de_la_Loire_region_location_map.svg.png",
            label: 'Pays de la Loire',
            capital: 'Nantes'
        },
        'centre-val-de-loire': {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Centre-Val_de_Loire_region_location_map.svg/400px-Centre-Val_de_Loire_region_location_map.svg.png",
            label: 'Centre-Val de Loire',
            capital: 'Orléans'
        },
        'grand-est': {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Grand_Est_region_location_map.svg/400px-Grand_Est_region_location_map.svg.png",
            label: 'Grand Est',
            capital: 'Strasbourg'
        },
        'bourgogne-franche-comte': {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bourgogne-Franche-Comt%C3%A9_region_location_map.svg/400px-Bourgogne-Franche-Comt%C3%A9_region_location_map.svg.png",
            label: 'Bourgogne-Franche-Comté',
            capital: 'Dijon'
        },
        'nouvelle-aquitaine': {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Nouvelle-Aquitaine_region_location_map.svg/400px-Nouvelle-Aquitaine_region_location_map.svg.png",
            label: 'Nouvelle-Aquitaine',
            capital: 'Bordeaux'
        },
        'auvergne-rhone-alpes': {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Auvergne-Rh%C3%B4ne-Alpes_region_location_map.svg/400px-Auvergne-Rh%C3%B4ne-Alpes_region_location_map.svg.png",
            label: 'Auvergne-Rhône-Alpes',
            capital: 'Lyon'
        },
        'occitanie': {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/ae/Occitanie_region_location_map.svg/400px-Occitanie_region_location_map.svg.png",
            label: 'Occitanie',
            capital: 'Toulouse'
        },
        'paca': {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Provence-Alpes-C%C3%B4te_d%27Azur_region_location_map.svg/400px-Provence-Alpes-C%C3%B4te_d%27Azur_region_location_map.svg.png",
            label: 'Provence-Alpes-Côte d\'Azur',
            capital: 'Marseille'
        },
        'corse': {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Corse_region_location_map.svg/400px-Corse_region_location_map.svg.png",
            label: 'Corse',
            capital: 'Ajaccio'
        }
    };
    
    const selectedRegion = regions[highlightTarget] || regions['ile-de-france'];
    
    return `
        <div class="geo-map-container">
            <div style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); padding: 20px; border-radius: 8px;">
                <h3 style="text-align: center; color: #e0f2fe; margin-top: 0; font-size: 20px; font-weight: 700;">
                    🗺️ Les 13 Régions de France Métropolitaine
                </h3>
                <div style="text-align: center; margin: 15px 0;">
                    <img src="${selectedRegion.image}" alt="${selectedRegion.label}" 
                        style="max-width: 100%; height: auto; max-height: 350px; border-radius: 6px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
                </div>
                <div style="text-align: center; background: rgba(15, 23, 42, 0.95); padding: 12px; border-radius: 6px; border: 2px solid #3b82f6;">
                    <p style="margin: 0; color: #60a5fa; font-weight: 700; font-size: 16px;">
                        ${selectedRegion.label}
                    </p>
                    <p style="margin: 5px 0 0 0; color: #94a3b8; font-size: 12px;">
                        Capitale: ${selectedRegion.capital}
                    </p>
                </div>
            </div>
        </div>
    `;
}

// Fonction principale pour générer n'importe quelle carte
function generateMap(mapType, target) {
    if (mapType === 'drom') {
        return generateDROMMap(target);
    } else if (mapType === 'regions') {
        return generateRegionsMap(target);
    }
    return '';
}

