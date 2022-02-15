export const traits = {
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
        requires: "universityLife",
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
    criminalCareer: {
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
    musicRockCareer: {
        label: "Rock Star",
    },
    musicSkills: {
        label: "One Sim Band",
        requires: ["lateNight"],
    },
    musicSymphonicCareer: {
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
