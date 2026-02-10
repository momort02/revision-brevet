// Générateur de cartes SVG pour les questions de géographie

// Fonction pour créer la carte des DROM avec mise en évidence
function generateDROMMap(highlightTarget) {
    const dromData = {
        guadeloupe: {
            path: 'M 140,110 C 145,108 152,108 157,110 L 160,125 C 158,128 148,130 145,128 Z',
            x: 150, y: 135, label: "Guadeloupe", region: "Caraïbes"
        },
        martinique: {
            path: 'M 148,175 C 152,173 158,173 162,175 L 160,187 C 157,189 151,189 148,187 Z',
            x: 155, y: 195, label: "Martinique", region: "Caraïbes"
        },
        guyane: {
            path: 'M 210,125 L 245,125 L 245,160 L 230,165 L 210,160 Z',
            x: 227, y: 175, label: "Guyane", region: "Amérique du Sud"
        },
        reunion: {
            path: 'M 510,245 C 515,242 523,242 528,245 L 530,258 C 527,262 515,262 510,258 Z',
            x: 519, y: 270, label: "La Réunion", region: "Océan Indien"
        },
        mayotte: {
            path: 'M 475,235 C 478,233 483,233 486,235 L 485,244 C 482,246 477,246 475,244 Z',
            x: 480, y: 255, label: "Mayotte", region: "Océan Indien"
        }
    };
    
    let svg = `
        <svg viewBox="0 0 600 320" class="geo-map" style="background: linear-gradient(180deg, #0c4a6e 0%, #075985 100%);">
            <defs>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
                <radialGradient id="oceanGradient">
                    <stop offset="0%" stop-color="#0369a1" stop-opacity="0.3"/>
                    <stop offset="100%" stop-color="#0c4a6e" stop-opacity="0.1"/>
                </radialGradient>
            </defs>
            
            <!-- Titre -->
            <rect width="600" height="50" fill="rgba(15, 23, 42, 0.8)"/>
            <text x="300" y="32" text-anchor="middle" fill="#e0f2fe" font-size="18" font-weight="700" letter-spacing="1">
                🌍 Départements et Régions d'Outre-Mer (DROM)
            </text>
            
            <!-- Effet d'océan -->
            <circle cx="150" cy="150" r="80" fill="url(#oceanGradient)"/>
            <circle cx="520" cy="250" r="60" fill="url(#oceanGradient)"/>
            <circle cx="230" cy="145" r="70" fill="url(#oceanGradient)"/>
    `;
    
    // Dessiner chaque DROM
    for (const [key, drom] of Object.entries(dromData)) {
        const isHighlighted = key === highlightTarget;
        const fillColor = isHighlighted ? '#fbbf24' : '#64748b';
        const opacity = isHighlighted ? 1 : 0.4;
        const strokeWidth = isHighlighted ? 3 : 2;
        const filter = isHighlighted ? 'url(#glow)' : 'none';
        
        svg += `
            <g opacity="${opacity}">
                <!-- Territoire -->
                <path d="${drom.path}" 
                    fill="${fillColor}" 
                    stroke="${isHighlighted ? '#fff' : '#94a3b8'}" 
                    stroke-width="${strokeWidth}"
                    filter="${filter}"
                    style="transition: all 0.3s;"/>
                
                ${isHighlighted ? `
                    <!-- Marqueur -->
                    <circle cx="${drom.x}" cy="${drom.y - 10}" r="6" fill="#ef4444" stroke="#fff" stroke-width="2"/>
                    
                    <!-- Étiquette avec fond -->
                    <rect x="${drom.x - 50}" y="${drom.y + 5}" width="100" height="40" 
                        fill="rgba(15, 23, 42, 0.95)" rx="6" stroke="#fbbf24" stroke-width="2"/>
                    <text x="${drom.x}" y="${drom.y + 25}" 
                        text-anchor="middle" 
                        fill="#fbbf24" 
                        font-size="14"
                        font-weight="700">
                        ${drom.label}
                    </text>
                    <text x="${drom.x}" y="${drom.y + 39}" 
                        text-anchor="middle" 
                        fill="#94a3b8" 
                        font-size="10">
                        ${drom.region}
                    </text>
                ` : ''}
            </g>
        `;
    }
    
    // Légende
    svg += `
        <g opacity="0.7">
            <rect x="10" y="270" width="200" height="40" fill="rgba(15, 23, 42, 0.9)" rx="6"/>
            <circle cx="25" cy="285" r="5" fill="#fbbf24"/>
            <text x="40" y="290" fill="#e0f2fe" font-size="11">
                Zone mise en évidence
            </text>
            <circle cx="25" cy="300" r="5" fill="#64748b"/>
            <text x="40" y="305" fill="#cbd5e1" font-size="11">
                Autres DROM
            </text>
        </g>
    `;
    
    svg += `</svg>`;
    return svg;
}

// Fonction pour créer la carte des régions françaises avec mise en évidence
function generateRegionsMap(highlightTarget) {
    const regions = {
        'ile-de-france': { 
            path: 'M 295,185 L 315,185 L 318,195 L 315,205 L 295,205 Z',
            label: 'Île-de-France', x: 305, y: 195, capital: 'Paris'
        },
        'hauts-de-france': {
            path: 'M 285,125 L 340,125 L 342,135 L 340,165 L 285,165 Z',
            label: 'Hauts-de-France', x: 312, y: 145, capital: 'Lille'
        },
        'normandie': {
            path: 'M 235,145 L 280,145 L 283,155 L 280,180 L 235,180 Z',
            label: 'Normandie', x: 257, y: 162, capital: 'Rouen'
        },
        'bretagne': {
            path: 'M 145,145 L 100,155 L 95,170 L 105,190 L 160,200 L 230,195 L 232,175 L 225,150 Z',
            label: 'Bretagne', x: 175, y: 172, capital: 'Rennes'
        },
        'pays-de-la-loire': {
            path: 'M 215,208 L 275,208 L 278,220 L 275,248 L 215,248 Z',
            label: 'Pays de la Loire', x: 245, y: 228, capital: 'Nantes'
        },
        'centre-val-de-loire': {
            path: 'M 255,192 L 315,192 L 318,205 L 315,238 L 255,238 Z',
            label: 'Centre-Val de Loire', x: 285, y: 215, capital: 'Orléans'
        },
        'grand-est': {
            path: 'M 345,145 L 415,145 L 420,165 L 415,208 L 345,208 Z',
            label: 'Grand Est', x: 380, y: 176, capital: 'Strasbourg'
        },
        'bourgogne-franche-comte': {
            path: 'M 340,215 L 408,215 L 412,235 L 408,268 L 340,268 Z',
            label: 'Bourgogne-Franche-Comté', x: 374, y: 241, capital: 'Dijon'
        },
        'nouvelle-aquitaine': {
            path: 'M 175,255 L 275,255 L 280,280 L 275,355 L 180,360 L 175,330 Z',
            label: 'Nouvelle-Aquitaine', x: 227, y: 305, capital: 'Bordeaux'
        },
        'auvergne-rhone-alpes': {
            path: 'M 315,252 L 395,252 L 400,275 L 395,335 L 315,335 Z',
            label: 'Auvergne-Rhône-Alpes', x: 355, y: 293, capital: 'Lyon'
        },
        'occitanie': {
            path: 'M 255,335 L 375,335 L 380,355 L 375,405 L 260,410 L 255,385 Z',
            label: 'Occitanie', x: 315, y: 372, capital: 'Toulouse'
        },
        'paca': {
            path: 'M 380,325 L 455,325 L 460,345 L 455,375 L 380,375 Z',
            label: 'Provence-Alpes-Côte d\'Azur', x: 417, y: 350, capital: 'Marseille'
        },
        'corse': {
            path: 'M 485,365 L 505,365 L 508,385 L 505,410 L 485,410 Z',
            label: 'Corse', x: 495, y: 387, capital: 'Ajaccio'
        }
    };
    
    let svg = `
        <svg viewBox="0 0 600 480" class="geo-map" style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);">
            <defs>
                <filter id="region-glow">
                    <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
                <linearGradient id="franceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#334155" stop-opacity="0.2"/>
                    <stop offset="100%" stop-color="#1e293b" stop-opacity="0.4"/>
                </linearGradient>
            </defs>
            
            <!-- Fond carte France -->
            <rect width="600" height="480" fill="url(#franceGradient)"/>
            
            <!-- Titre -->
            <rect width="600" height="60" fill="rgba(15, 23, 42, 0.9)"/>
            <text x="300" y="38" text-anchor="middle" fill="#e0f2fe" font-size="20" font-weight="700" letter-spacing="1">
                🗺️ Les 13 Régions de France Métropolitaine
            </text>
    `;
    
    // Dessiner toutes les régions d'abord (en gris)
    for (const [key, region] of Object.entries(regions)) {
        if (key !== highlightTarget) {
            svg += `
                <g opacity="0.25">
                    <path d="${region.path}" 
                        fill="#475569" 
                        stroke="#64748b" 
                        stroke-width="1.5"/>
                </g>
            `;
        }
    }
    
    // Dessiner la région mise en évidence par-dessus
    if (regions[highlightTarget]) {
        const region = regions[highlightTarget];
        svg += `
            <g opacity="1">
                <path d="${region.path}" 
                    fill="#3b82f6" 
                    stroke="#60a5fa" 
                    stroke-width="3.5"
                    filter="url(#region-glow)"
                    style="animation: pulse 2s infinite;"/>
                
                <!-- Marqueur capitale -->
                <circle cx="${region.x}" cy="${region.y}" r="6" fill="#ef4444" stroke="#fff" stroke-width="2"/>
                
                <!-- Étiquette -->
                <rect x="${region.x - 85}" y="${region.y - 50}" width="170" height="42" 
                    fill="rgba(15, 23, 42, 0.95)" rx="8" stroke="#3b82f6" stroke-width="2.5"/>
                <text x="${region.x}" y="${region.y - 28}" 
                    text-anchor="middle" 
                    fill="#60a5fa" 
                    font-size="13"
                    font-weight="700">
                    ${region.label}
                </text>
                <text x="${region.x}" y="${region.y - 13}" 
                    text-anchor="middle" 
                    fill="#94a3b8" 
                    font-size="10">
                    Capitale: ${region.capital}
                </text>
            </g>
        `;
    }
    
    // Légende
    svg += `
        <g opacity="0.8">
            <rect x="15" y="420" width="230" height="50" fill="rgba(15, 23, 42, 0.95)" rx="8" stroke="#334155" stroke-width="1.5"/>
            <rect x="30" y="432" width="25" height="12" fill="#3b82f6" rx="2"/>
            <text x="65" y="441" fill="#e0f2fe" font-size="11" font-weight="600">
                Région mise en évidence
            </text>
            <rect x="30" y="450" width="25" height="12" fill="#475569" rx="2"/>
            <text x="65" y="459" fill="#cbd5e1" font-size="11">
                Autres régions
            </text>
        </g>
    `;
    
    svg += `</svg>`;
    return svg;
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

