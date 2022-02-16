export const traits = {
    none: {
        label: "---",
    },
    absentMinded: {
        label: "Absent-minded",
        conflicts: ["perceptive"],
    },
    adventurous: {
        label: "Adventurous",
    },
    ambitious: {
        label: "Ambitious",
    },
    angler: {
        label: "Angler",
    },
    animalLover: {
        label: "Animal Lover",
    },
    artistic: {
        label: "Artistic",
        conflicts: ["cantStandArt"],
    },
    athletic: {
        label: "Athletic",
        conflicts: [],
    },
    avantGarde: {
        label: "Avant Garde",
        conflicts: ["cantStandArt", "easilyImpressed"],
        minAge: 4,
        requires: ["universityLife"],
    },
    bookworm: {
        label: "Bookworm",
    },
    bornSalesperson: {
        label: "Born Salesperson",
    },
    botFan: {
        label: "Bot Fan",
    },
    brave: {
        label: "Brave",
        conflicts: ["coward", "loser"],
    },
    brooding: {
        label: "Brooding",
    },
    cantStandArt: {
        label: "Can't Stand Art",
    },
    catPerson: {
        label: "Cat Person",
    },
    charismatic: {
        label: "Charismatic",
    },
    childish: {
        label: "Childish",
    },
    clumsy: {
        label: "Clumsy",
    },
    commitmentIssue: {
        label: "Commitment Issues",
    },
    computerWhiz: {
        label: "Computer Whiz",
    },
    couchPotato: {
        label: "Couch Potato",
        conflicts: [],
    },
    coward: {
        label: "Coward",
    },
    daredevil: {
        label: "Daredevil",
    },
    disciplined: {
        label: "Disciplined",
        conflicts: ["couchPotato"],
        requires: "worldAdventures",
    },
    dislikesChildren: {
        label: "Dislikes Children",
    },
    diva: {
        label: "Diva",
    },
    dogPerson: {
        label: "Dog Person",
    },
    dramatic: {
        label: "Dramatic",
    },
    easilyImpressed: {
        label: "Easily impressed",
        conflicts: ["snob"],
    },
    eccentric: {
        label: "Eccentric",
    },
    ecoFriendly: {
        label: "Eco-Friendly",
    },
    equestrian: {
        label: "Equestrian",
    },
    evil: {
        label: "Evil",
        conflicts: ["good"],
    },
    excitable: {
        label: "Excitable",
        conflicts: [],
    },
    familyOriented: {
        label: "Family-Oriented",
    },
    flirty: {
        label: "Flirty",
    },
    friendly: {
        label: "Friendly",
        conflicts: [],
    },
    frugal: {
        label: "Frugal",
    },
    gatherer: {
        label: "Gatherer",
    },
    genius: {
        label: "Genius",
        conflicts: [],
    },
    good: {
        label: "Good",
    },
    goodSenseOfHumor: {
        label: "Good Sense of Humor",
    },
    greatKisser: {
        label: "Great Kisser",
    },
    greenThumb: {
        label: "Green Thumb",
    },
    grumpy: {
        label: "Grumpy",
    },
    handy: {
        label: "Handy",
    },
    hatesTheOutdoors: {
        label: "Hates the Outdoors",
    },
    heavySleeper: {
        label: "Heavy Sleeper",
    },
    hopelessRomantic: {
        label: "Hopeless Romantic",
    },
    hotHeaded: {
        label: "Hot-Headed",
    },
    hydrophobic: {
        label: "Hydrophobic",
    },
    inappropriate: {
        label: "Inappropriate",
    },
    insane: {
        label: "Insane",
    },
    irresistible: {
        label: "Irresistible",
    },
    kleptomaniac: {
        label: "Kleptomaniac",
    },
    lightSleeper: {
        label: "Light Sleeper",
    },
    loner: {
        label: "Loner",
    },
    loser: {
        label: "Loser",
    },
    lovesTheCold: {
        label: "Loves the Cold",
    },
    lovesTheHeat: {
        label: "Loves the Heat",
    },
    lovesTheOutdoors: {
        label: "Loves the Outdoors",
    },
    lovesToSwim: {
        label: "Loves to Swim",
    },
    lucky: {
        label: "Lucky",
    },
    meanSpirited: {
        label: "Mean Spirited",
    },
    mooch: {
        label: "Mooch",
    },
    naturalBornPerformer: {
        label: "Natural Born Performer",
    },
    naturalCook: {
        label: "Natural Cook",
    },
    neat: {
        label: "Neat",
    },
    neurotic: {
        label: "Neurotic",
    },
    neverNude: {
        label: "Never Nude",
    },
    nightOwl: {
        label: "Night Owl",
    },
    noSenseOfHumor: {
        label: "No Sense of Humor",
    },
    nurturing: {
        label: "Nurturing",
    },
    overEmotional: {
        label: "Over-Emotional",
    },
    partyAnimal: {
        label: "Party Animal",
    },
    perceptive: {
        label: "Perceptive",
    },
    perfectionist: {
        label: "Perfectionist",
    },
    photographersEye: {
        label: "Photographer's Eye",
    },
    proper: {
        label: "Proper",
    },
    rebellious: {
        label: "Rebellious",
    },
    sailor: {
        label: "Sailor",
    },
    savvySculptor: {
        label: "Savvy Sculptor",
    },
    schmoozer: {
        label: "Schmoozer",
    },
    shy: {
        label: "Shy",
    },
    slob: {
        label: "Slob",
    },
    snob: {
        label: "Snob",
    },
    socialButterfly: {
        label: "Social Butterfly",
    },
    sociallyAwkward: {
        label: "Socially Awkward",
    },
    starQuality: {
        label: "Star Quality",
    },
    supernaturalFan: {
        label: "Supernatural Fan",
    },
    supernaturalSkeptic: {
        label: "Supernatural Skeptic",
    },
    technophobe: {
        label: "Technophobe",
    },
    unflirty: {
        label: "Unflirty",
    },
    unlucky: {
        label: "Unlucky",
    },
    unstable: {
        label: "Unstable",
    },
    vegetarian: {
        label: "Vegetarian",
    },
    vehicleEnthusiast: {
        label: "Vehicle Enthusiast",
    },
    virtuoso: {
        label: "Virtuoso",
    },
    workaholic: {
        label: "Workaholic",
    },
};

export const traitOptions = () => {
    return Object.keys(traits).map((key) => {
        return (
            <option key={key} value={key}>
                {traits[key].label}
            </option>
        );
    });
};

export const lifetimeWishes = {
    none: {
        label: "---",
    },
    aquarium: {
        label: "Presenting the Perfect Private Aquarium",
    },
    architectureCareer: {
        label: "Home Design Hotshot",
        requires: ["ambitions"],
    },
    athleticCareer: {
        label: "Become a Superstar Athlete",
    },
    author: {
        label: "Professional Author",
    },
    businessCareer: {
        label: "CEO of a Mega-Corporation",
    },
    celebrity: {
        label: "Lifestyle of the Rich and Famous",
        requires: ["lateNight"],
    },
    chessLegend: {
        label: "Chess Legend",
    },
    criminalThiefCareerWish: {
        label: "Become a Master Thief",
    },
    criminalEvilCareer: {
        label: "The Emperor of Evil",
    },
    culinaryCareer: {
        label: "Celebrated Five-Star Chef",
    },
    culinaryLibrarian: {
        label: "The Culinary Librarian",
    },
    daVinci: {
        label: "Descendant of da Vinci",
        requires: ["ambitions"],
    },
    filmActingCareer: {
        label: "Superstar Actor",
        requires: ["lateNight"],
    },
    filmDirectingCareer: {
        label: "Distinguished Director",
        requires: ["lateNight"],
    },
    firefighterCareer: {
        label: "Firefighter Super Hero",
        requires: ["ambitions"],
    },
    gallery: {
        label: "World-Class Gallery",
        requires: ["worldAdventures"],
    },
    garden: {
        label: "The Perfect Garden",
    },
    ghostHunterCareer: {
        label: "Paranormal Profiteer",
        requires: ["ambitions"],
    },
    goldDigger: {
        label: "Gold Digger",
    },
    goldenTongue: {
        label: "Golden Tongue, Golden Fingers",
    },
    greatExplorer: {
        label: "Great Explorer",
        requires: ["worldAdventures"],
    },
    heartbreaker: {
        label: "Heartbreaker",
    },
    illustriousAuthor: {
        label: "Illustrious Author",
    },
    investigatorCareer: {
        label: "Pervasive Private Eye",
        requires: ["ambitions"],
    },
    jackOfAllTrades: {
        label: "Jack of All Trades",
    },
    journalismCareer: {
        label: "Star News Anchor",
    },
    lapOfLuxury: {
        label: "Living in the Lap of Luxury",
    },
    lawEnforcementForensicCareer: {
        label: "Forensic Specialist: Dynamic DNA Profiler",
    },
    lawEnforcementSpecialAgentCareer: {
        label: "International Super Spy",
    },
    martialArts: {
        label: "Martial Arts Master",
        requires: ["worldAdventures"],
    },
    masterOfTheArts: {
        label: "Master of the Arts",
    },
    medicalCareer: {
        label: "World Renowned Surgeon",
    },
    militaryCareer: {
        label: "Become an Astronaut",
    },
    mixologist: {
        label: "Master Mixologist",
        requires: ["lateNight"],
    },
    monsterMaker: {
        label: "Monster Maker",
        requires: ["ambitions"],
    },
    musicRockCareerWish: {
        label: "Rock Star",
    },
    musicSkills: {
        label: "One Sim Band",
        requires: ["lateNight"],
    },
    musicSymphonicCareerWish: {
        label: "Hit Movie Composer",
    },
    nectar: {
        label: "Bottomless Nectar Cellar",
        requires: ["worldAdventures"],
    },
    perfectMind: {
        label: "Perfect Mind, Perfect Body",
    },
    physicalPerfection: {
        label: "Physical Perfection",
        requires: ["worldAdventures"],
    },
    politicalCareer: {
        label: "Leader of the Free World",
    },
    privateMuseum: {
        label: "Private Museum",
        requires: ["worldAdventures"],
    },
    renaissanceSim: {
        label: "Renaissance Sim",
    },
    romancer: {
        label: "Master Romancer",
        requires: ["lateNight"],
    },
    scienceCareer: {
        label: "Become a Creature-Robot Cross Breeder",
    },
    seasonedTraveler: {
        label: "Seasoned Traveler",
        requires: ["worldAdventures"],
    },
    stealing: {
        label: "Possession is Nine Tenths of the Law",
        requires: ["ambitions"],
    },
    stylistCareer: {
        label: "Fashion Phenomenon",
        requires: ["ambitions"],
    },
    superPopular: {
        label: "Super Popular",
    },
    surroundedByFamily: {
        label: "Surrounded by Family",
    },
    swimmingInCash: {
        label: "Swimming in Cash",
    },
    tinkerer: {
        label: "The Tinkerer",
    },
    visionary: {
        label: "Visionary",
        requires: ["worldAdventures"],
    },
};

export const lifetimeWishOptions = () => {
    return Object.keys(lifetimeWishes).map((key) => (
        <option key={key} value={key}>
            {lifetimeWishes[key].label}
        </option>
    ));
};

export const ltwWeightMapping = {
    absentMinded: {},
    adventurous: {
        firefighterCareer: 4,
        ghostHunterCareer: 3,
        greatExplorer: 5,
        investigatorCareer: 2,
        lawEnforcementSpecialAgentCareer: 4,
        seasonedTraveler: 2,
    },
    ambitious: {
        athleticCareer: 3,
        celebrity: 3,
        culinaryCareer: 3,
        filmActingCareer: 4,
        goldDigger: 1,
        journalismCareer: 2,
        lapOfLuxury: 1,
        medicalCareer: 5,
        musicRockCareerWish: 5,
        politicalCareer: 5,
    },
    angler: { aquarium: 5 },
    animalLover: {},
    artistic: {
        architectureCareer: 2,
        author: 2,
        daVinci: 1,
        gallery: 3,
        masterOfTheArts: 5,
        renaissanceSim: 1,
        stylistCareer: 2,
    },
    athletic: {
        athleticCareer: 5,
        jackOfAllTrades: 1,
        martialArts: 3,
        militaryCareer: 1,
        perfectMind: 2,
        physicalPerfection: 2,
    },
    avantGarde: { architectureCareer: 3, gallery: 3, illustriousAuthor: 1, masterOfTheArts: 5 },
    bookworm: {
        chessLegend: 1,
        illustriousAuthor: 5,
        jackOfAllTrades: 1,
        perfectMind: 1,
        renaissanceSim: 1,
        author: 5,
    },
    bornSalesperson: {},
    botFan: {},
    brave: {},
    brooding: {},
    cantStandArt: {
        masterOfTheArts: -5,
        illustriousAuthor: -3,
        chessLegend: 1,
        musicRockCareerWish: -3,
        musicSymphonicCareerWish: -3,
    },
    catPerson: {},
    charismatic: {
        goldenTongue: 5,
        politicalCareer: 3,
        jackOfAllTrades: 1,
        journalismCareer: 2,
        superPopular: 5,
        surroundedByFamily: 1,
    },
    childish: {
        scienceCareer: 1,
        lawEnforcementSpecialAgentCareer: 1,
        jackOfAllTrades: 3,
        superPopular: 1,
        surroundedByFamily: 2,
    },
    clumsy: {
        perfectMind: -2,
        athleticCareer: -2,
    },
    commitmentIssue: {
        surroundedByFamily: -5,
        heartbreaker: 5,
        jackOfAllTrades: 4,
        goldDigger: 1,
    },
    computerWhiz: {
        scienceCareer: 5,
        chessLegend: 1,
    },
    couchPotato: {
        athleticCareer: -5,
        perfectMind: -2,
    },
    coward: {},
    daredevil: {},
    disciplined: {},
    dislikesChildren: {
        surroundedByFamily: -5,
    },
    diva: {},
    dogPerson: {},
    dramatic: {},
    easilyImpressed: {
        jackOfAllTrades: 3,
        renaissanceSim: 3,
    },
    eccentric: {},
    ecoFriendly: {},
    equestrian: {},
    evil: {
        criminalEvilCareer: 5,
        criminalThiefCareerWish: 3,
        goldDigger: 3,
    },
    excitable: {
        jackOfAllTrades: 3,
        renaissanceSim: 3,
    },
    familyOriented: {
        surroundedByFamily: 5,
    },
    flirty: {
        heartbreaker: 5,
        goldDigger: 1,
    },
    friendly: {
        superPopular: 5,
    },
    frugal: {
        swimmingInCash: 5,
        lapOfLuxury: 5,
    },
    gatherer: {},
    genius: {
        chessLegend: 3,
        scienceCareer: 5,
        medicalCareer: 5,
    },
    good: {
        criminalEvilCareer: -5,
        criminalThiefCareerWish: -3,
        goldDigger: -5,
        heartbreaker: -3,
    },
    goodSenseOfHumor: {},
    greatKisser: {},
    greenThumb: { garden: 5, aquarium: 1 },
    grumpy: {},
    handy: { tinkerer: 5 },
    hatesTheOutdoors: { aquarium: -5 },
    heavySleeper: {},
    hopelessRomantic: { heartbreaker: -5 },
    hotHeaded: {},
    hydrophobic: {},
    inappropriate: {},
    insane: {},
    irresistible: {},
    kleptomaniac: {},
    lightSleeper: {},
    loner: {},
    loser: {},
    lovesTheCold: {},
    lovesTheHeat: {},
    lovesTheOutdoors: {},
    lovesToSwim: {},
    lucky: {},
    meanSpirited: {},
    mooch: {},
    naturalBornPerformer: {},
    naturalCook: {},
    neat: {},
    neurotic: {},
    neverNude: {},
    nightOwl: {},
    noSenseOfHumor: {},
    nurturing: {},
    overEmotional: {},
    partyAnimal: {},
    perceptive: {},
    perfectionist: {},
    photographersEye: {},
    proper: {},
    rebellious: {},
    sailor: {},
    savvySculptor: {},
    schmoozer: {},
    shy: {},
    slob: {},
    snob: {},
    socialButterfly: {},
    sociallyAwkward: {},
    starQuality: {},
    supernaturalFan: {},
    supernaturalSkeptic: {},
    technophobe: {},
    unflirty: { heartbreaker: -5 },
    unlucky: {},
    unstable: {},
    vegetarian: {},
    vehicleEnthusiast: {},
    virtuoso: {
        musicRockCareerWish: 4,
        musicSymphonicCareerWish: 5,
        masterOfTheArts: 3,
    },
    workaholic: {},
};

export const careers = {
    architecturalDesigner: {
        label: "Architectural Designer",
        requires: ["ambitions"],
    },
    business: {
        label: "Business",
    },
    criminalEvil: {
        label: "Evil",
        root: "criminal",
    },
    criminalThief: {
        label: "Thief",
        root: "criminal",
    },
    culinary: {
        label: "Culinary",
    },
    education: {
        label: "Education",
        requires: ["ambitions"],
    },
    filmActing: {
        label: "Acting",
        root: "film",
        requires: ["lateNight"],
    },
    filmDirecting: {
        label: "Directing",
        root: "film",
        requires: ["lateNight"],
    },
    firefighter: {
        label: "Firefighter",
        requires: ["ambitions"],
    },
    ghostHunter: {
        label: "Ghost Hunter",
        requires: ["ambitions"],
    },
    investigator: {
        label: "Investigator",
        requires: ["ambitions"],
    },
    journalism: {
        label: "Journalism",
    },
    lawEnforcementForensic: {
        label: "Forensic Analyst",
        root: "lawEnforcement",
    },
    lawEnforcementSpecialAgent: {
        label: "Special Agent",
        root: "lawEnforcement",
    },
    medical: {
        label: "Medical",
    },
    military: {
        label: "Military",
    },
    musicRock: {
        label: "Rock",
        root: "music",
    },
    musicSymphonic: {
        label: "Symphonic",
        root: "music",
    },
    political: {
        label: "Political",
    },
    professionalSports: {
        label: "Professional Sports",
    },
    science: {
        label: "Science",
    },
    stylist: {
        label: "Stylist",
        requires: ["ambitions"],
    },
};

export const careerOptions = () => {
    return Object.keys(careers).map((key) => (
        <option key={key} value={key}>
            {careers[key].label}
        </option>
    ));
};

export const careerWeightMapping = {
    absentMinded: {},
    adventurous: {
        firefighter: 3,
        ghostHunter: 1,
        lawEnforcementSpecialAgent: 4,
        military: 2,
    },
    ambitious: { business: 4, medical: 5, political: 5, professionalSports: 3 },
    angler: {},
    animalLover: {},
    artistic: {},
    athletic: { firefighter: 1, lawEnforcementSpecialAgent: 1, military: 1, professionalSports: 5 },
    avantGarde: { architecturalDesigner: 3, stylist: 3 },
    bookworm: {},
    bornSalesperson: {},
    botFan: {},
    brave: {},
    brooding: {},
    cantStandArt: {},
    catPerson: {},
    charismatic: {},
    childish: {},
    clumsy: {},
    commitmentIssue: {},
    computerWhiz: {},
    couchPotato: {},
    coward: {},
    daredevil: {},
    disciplined: {},
    dislikesChildren: {},
    diva: {},
    dogPerson: {},
    dramatic: {},
    easilyImpressed: {},
    eccentric: {},
    ecoFriendly: {},
    equestrian: {},
    evil: {},
    excitable: {},
    familyOriented: {},
    flirty: {},
    friendly: {},
    frugal: {},
    gatherer: {},
    genius: {},
    good: {},
    goodSenseOfHumor: {},
    greatKisser: {},
    greenThumb: {},
    grumpy: {},
    handy: {},
    hatesTheOutdoors: {},
    heavySleeper: {},
    hopelessRomantic: {},
    hotHeaded: {},
    hydrophobic: {},
    inappropriate: {},
    insane: {},
    irresistible: {},
    kleptomaniac: {},
    lightSleeper: {},
    loner: {},
    loser: {},
    lovesTheCold: {},
    lovesTheHeat: {},
    lovesTheOutdoors: {},
    lovesToSwim: {},
    lucky: {},
    meanSpirited: {},
    mooch: {},
    naturalBornPerformer: {},
    naturalCook: {},
    neat: {},
    neurotic: {},
    neverNude: {},
    nightOwl: {},
    noSenseOfHumor: {},
    nurturing: {},
    overEmotional: {},
    partyAnimal: {},
    perceptive: {},
    perfectionist: {},
    photographersEye: {},
    proper: {},
    rebellious: {},
    sailor: {},
    savvySculptor: {},
    schmoozer: {},
    shy: {},
    slob: {},
    snob: {},
    socialButterfly: {},
    sociallyAwkward: {},
    starQuality: {},
    supernaturalFan: {},
    supernaturalSkeptic: {},
    technophobe: {},
    unflirty: {},
    unlucky: {},
    unstable: {},
    vegetarian: {},
    vehicleEnthusiast: {},
    virtuoso: {},
    workaholic: {},
    // ltws
    aquarium: {},
    architectureCareer: {},
    athleticCareer: {},
    author: {},
    businessCareer: {},
    celebrity: {},
    chessLegend: {},
    criminalThiefCareerWish: {},
    criminalEvilCareer: {},
    culinaryCareer: {},
    culinaryLibrarian: {},
    daVinci: {},
    filmActingCareer: {},
    filmDirectingCareer: {},
    firefighterCareer: {},
    gallery: {},
    garden: {},
    ghostHunterCareer: {},
    goldDigger: {},
    goldenTongue: {},
    greatExplorer: {},
    heartbreaker: {},
    illustriousAuthor: {},
    investigatorCareer: {},
    jackOfAllTrades: {},
    journalismCareer: {},
    lapOfLuxury: {},
    lawEnforcementForensicCareer: {},
    lawEnforcementSpecialAgentCareer: {},
    martialArts: {},
    masterOfTheArts: {},
    medicalCareer: {},
    militaryCareer: {},
    mixologist: {},
    monsterMaker: {},
    musicRockCareerWish: {},
    musicSkills: {},
    musicSymphonicCareerWish: {},
    nectar: {},
    perfectMind: {},
    physicalPerfection: {},
    politicalCareer: {},
    privateMuseum: {},
    renaissanceSim: {},
    romancer: {},
    scienceCareer: {},
    seasonedTraveler: {},
    stealing: {},
    stylistCareer: {},
    superPopular: {},
    surroundedByFamily: {},
    swimmingInCash: {},
    tinkerer: {},
    visionary: {},
};
