export const traits = {
    none: {
        label: "---",
    },
    active: {
        label: "Active",
        conflicts: ["lazy"],
    },
    adventurous: {
        label: "Adventurous",
        conflicts: [],
        requires: ["snowyEscape"],
    },
    ambitious: {
        label: "Ambitious",
        conflicts: [],
    },
    animalEnthusiast: {
        label: "Animal Enthusiast",
        conflicts: [],
    },
    artLover: {
        label: "Art Lover",
        conflicts: [],
    },
    bookworm: {
        label: "Bookworm",
        conflicts: [],
    },
    bro: {
        label: "Bro",
        conflicts: [],
    },
    catLover: {
        label: "Cat Lover",
        conflicts: ["pets"],
    },
    cheerful: {
        label: "Cheerful",
        conflicts: [],
    },
    childOfTheIslands: {
        label: "Child of the Islands",
        conflicts: [],
        requires: ["islandLiving"],
    },
    childOfTheOcean: {
        label: "Child of the Ocean",
        conflicts: [],
        requires: ["islandLiving"],
    },
    childish: {
        label: "Childish",
        conflicts: [],
    },
    clumsy: {
        label: "Clumsy",
        conflicts: [],
    },
    creative: {
        label: "Creative",
        conflicts: [],
    },
    danceMachine: {
        label: "Dance Machine",
        conflicts: [],
        requires: ["getTogether"],
    },
    dogLover: {
        label: "Dog Lover",
        conflicts: ["pets"],
    },
    erratic: {
        label: "Erratic",
        conflicts: [],
    },
    evil: {
        label: "Evil",
        conflicts: [],
    },
    familyOriented: {
        label: "Family-oriented",
        conflicts: [],
    },
    foodie: {
        label: "Foodie",
        conflicts: [],
    },
    freegan: {
        label: "Freegan",
        conflicts: [],
        requires: ["ecoLifestyle"],
    },
    geek: {
        label: "Geek",
        conflicts: [],
    },
    genius: {
        label: "Genius",
        conflicts: [],
    },
    gloomy: {
        label: "Gloomy",
        conflicts: [],
    },
    glutton: {
        label: "Glutton",
        conflicts: [],
    },
    good: {
        label: "Good",
        conflicts: [],
    },
    goofball: {
        label: "Goofball",
        conflicts: [],
    },
    greenFiend: {
        label: "Green Fiend",
        conflicts: [],
        requires: ["ecoLifestyle"],
    },
    hatesChildren: {
        label: "Hates Children",
        conflicts: [],
    },
    highMaintenance: {
        label: "High Maintenance",
        conflicts: [],
        requires: ["spaDay"],
    },
    hotHeaded: {
        label: "Hot-Headed",
        conflicts: [],
    },
    insider: {
        label: "Insider",
        conflicts: [],
        requires: ["getTogether"],
    },
    jealous: {
        label: "Jealous",
        conflicts: [],
    },
    kleptomaniac: {
        label: "Kleptomaniac",
        conflicts: [],
    },
    lactoseIntolerant: {
        label: "Lactose Intolerant",
        conflicts: [],
        requires: ["cottageLiving"],
    },
    lazy: {
        label: "Lazy",
        conflicts: [],
    },
    loner: {
        label: "Loner",
        conflicts: [],
    },
    lovesOutdoors: {
        label: "Loves Outdoors",
        conflicts: [],
    },
    maker: {
        label: "Maker",
        conflicts: [],
        requires: ["ecoLifestyle"],
    },
    materialistic: {
        label: "Materialistic",
        conflicts: [],
    },
    mean: {
        label: "Mean",
        conflicts: [],
    },
    musicLover: {
        label: "Music Lover",
        conflicts: [],
    },
    neat: {
        label: "Neat",
        conflicts: [],
    },
    noncommittal: {
        label: "Noncommittal",
        conflicts: [],
    },
    outgoing: {
        label: "Outgoing",
        conflicts: [],
    },
    paranoid: {
        label: "Paranoid",
        conflicts: [],
        requires: ["strangerVille"],
    },
    perfectionist: {
        label: "Perfectionist",
        conflicts: [],
    },
    proper: {
        label: "Proper",
        conflicts: ["snowyEscape"],
    },
    recycleDisciple: {
        label: "Recycle Disciple",
        conflicts: [],
    },
    romantic: {
        label: "Romantic",
        conflicts: [],
    },
    selfAbsorbed: {
        label: "Self-Absorbed",
        conflicts: [],
        requires: ["getFamous"],
    },
    selfAssured: {
        label: "Self-Assured",
        conflicts: [],
    },
    slob: {
        label: "Slob",
        conflicts: [],
    },
    snob: {
        label: "Snob",
        conflicts: [],
    },
    squeamish: {
        label: "Squeamish",
        conflicts: [],
        requires: ["outdoorRetreat"],
    },
    unflirty: {
        label: "Unflirty",
        conflicts: [],
    },
    vegetarian: {
        label: "Vegetarian",
        conflicts: [],
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

export const toddlerTraits = {
    none: {
        label: "---",
    },
    angelic: {
        label: "Angelic",
        conflicts: [],
    },
    charmer: {
        label: "Charmer",
        conflicts: [],
    },
    clingy: {
        label: "Clingy",
        conflicts: [],
    },
    fussy: {
        label: "Fussy",
        conflicts: [],
    },
    independent: {
        label: "Independent",
        conflicts: [],
    },
    inquisitive: {
        label: "Inquisitive",
        conflicts: [],
    },
    silly: {
        label: "Silly",
        conflicts: [],
    },
    wild: {
        label: "Wild",
        conflicts: [],
    },
};

export const toddlerTraitOptions = () => {
    return Object.keys(toddlerTraits).map((key) => {
        return (
            <option key={key} value={`${key}`}>
                {toddlerTraits[key].label}
            </option>
        );
    });
};

export const aspirations = {
    none: {
        label: "---",
    },
    academic: {
        label: "Academic",
        requires: ["discoverUniversity"],
    },
    anglingAce: {
        label: "Angling Ace",
    },
    archaeologyScholar: {
        label: "Archaeology Scholar",
        requires: ["jungleAdventure"],
    },
    beachLife: {
        label: "Beach Life",
        requires: ["islandLiving"],
    },
    bestsellingAuthor: {
        label: "Bestselling Author",
    },
    bigHappyFamily: {
        label: "Big Happy Family",
    },
    bodybuilder: {
        label: "Bodybuilder",
    },
    chiefOfMischief: {
        label: "Chief of Mischief",
    },
    cityNative: {
        label: "City Native",
        requires: ["cityLiving"],
    },
    computerWhiz: {
        label: "Computer Whiz",
    },
    countryCaretaker: {
        label: "Country Caretaker",
        requires: ["cottageLiving"],
    },
    ecoInnovator: {
        label: "Eco Innovator",
        requires: ["ecoLifestyle"],
    },
    extremeSportsEnthusiast: {
        label: "Extreme Sports Enthusiast",
        requires: ["snowyEscape"],
    },
    fabulouslyFilthy: {
        label: "Fabulously Filthy",
        requires: ["bustTheDust"],
    },
    fabulouslyWealthy: {
        label: "Fabulously Wealthy",
    },
    freelanceBotanist: {
        label: "Freelance Botanist",
    },
    friendOfTheAnimals: {
        label: "Friend of the Animals",
        requires: ["pets"],
    },
    friendOfTheWorld: {
        label: "Friend of the World",
    },
    goodVampire: {
        label: "Good Vampire",
        requires: ["vampires"],
    },
    innerPeace: {
        label: "Inner Peace",
        requires: ["spaDay"],
    },
    jokeStar: {
        label: "Joke Star",
    },
    jungleExplorer: {
        label: "Jungle Explorer",
        requires: ["jungleAdventure"],
    },
    leaderOfThePack: {
        label: "Leader of the Pack",
        requires: ["getTogether"],
    },
    lordOfTheKnits: {
        label: "Lord/Lady of the Knits",
        requires: ["niftyKnitting"],
    },
    mansionBaron: {
        label: "Mansion Baron",
    },
    masterActor: {
        label: "Master Actor/Actress",
        requires: ["getFamous"],
    },
    masterChef: {
        label: "Master Chef",
    },
    masterMaker: {
        label: "Master Maker",
        requires: ["ecoLifestyle"],
    },
    masterMixologist: {
        label: "Master Mixologist",
    },
    masterVampire: {
        label: "Master Vampire",
        requires: ["vampires"],
    },
    mtKomorebiSightseer: {
        label: "Mt. Komorebi Sightseer",
        requires: ["snowyEscape"],
    },
    musicalGenius: {
        label: "Musical Genius",
    },
    neighborhoodConfidante: {
        label: "Neighborhood Confidante",
    },
    nerdBrain: {
        label: "Nerd Brain",
    },
    outdoorEnthusiast: {
        label: "Outdoor Enthusiast",
        requires: ["outdoorRetreat"],
    },
    painterExtraordinaire: {
        label: "Painter Extraordinaire",
    },
    partyAnimal: {
        label: "Party Animal",
    },
    perfectlyPristine: {
        label: "Perfectly Pristine",
        requires: ["bustTheDust"],
    },
    publicEnemy: {
        label: "Public Enemy`",
    },
    purveyorOfPotions: {
        label: "Purveyor of Potions",
        requires: ["realmOfMagic"],
    },
    renaissanceSim: {
        label: "Renaissance Sim",
    },
    selfCareSpecialist: {
        label: "Self-Care Specialist",
        requires: ["spaDay"],
    },
    serialRomantic: {
        label: "serialRomantic",
    },
    soulmate: {
        label: "Soulmate",
    },
    spellcraftAndSorcery: {
        label: "Spellcraft & Sorcery",
        requires: ["realmOfMagic"],
    },
    strangerVilleMystery: {
        label: "StrangerVille Mystery",
        requires: ["strangerville"],
    },
    successfulLineage: {
        label: "Successful Lineage",
    },
    superParent: {
        label: "Super Parent",
        requires: ["parenthood"],
    },
    theCurator: {
        label: "The Curator",
    },
    vampireFamily: {
        label: "Vampire Family",
        requires: ["vampires"],
    },
    villainousValentine: {
        label: "Villainous Valentine",
    },
    worldFamousCelebrity: {
        label: "World-Famous Celebrity",
        requires: ["getFamous"],
    },
    zenGuru: {
        label: "Zen Guru",
        requires: ["spaDay"],
    },
};

export const aspirationOptions = () => {
    return Object.keys(aspirations).map((key) => (
        <option key={key} value={key}>
            {aspirations[key].label}
        </option>
    ));
};

export const aspirationWeightMapping = {
    active: {},
    adventurous: {},
    ambitious: {},
    animalEnthusiast: {
        countryCaretaker: 5,
        friendOfTheAnimals: 4,
    },
    artLover: {
        painterExtraordinaire: 5,
        musicalGenius: 2,
        bestsellingAuthor: 2,
        lordOfTheKnits: 2,
    },
    bookworm: {},
    bro: {},
    catLover: {},
    cheerful: {
        beachLife: 1,
        chiefOfMischief: 1,
        cityNative: 1,
        countryCaretaker: 1,
        friendOfTheAnimals: 1,
        friendOfTheWorld: 1,
        innerPeace: 1,
        jokeStar: 2,
        selfCareSpecialist: 1,
    },
    childOfTheIslands: {},
    childOfTheOcean: {},
    childish: {},
    clumsy: {},
    creative: {
        painterExtraordinaire: 5,
        musicalGenius: 5,
        bestsellingAuthor: 5,
        masterActor: 4,
        masterChef: 3,
        lordOfTheKnits: 2,
    },
    danceMachine: {},
    dogLover: {},
    erratic: {},
    evil: {},
    familyOriented: {
        soulmate: 3,
        serialRomantic: -3,
    },
    foodie: { masterChef: 5, masterMixologist: 3 },
    freegan: {},
    geek: { bodybuilder: -2, renaissanceSim: 2, nerdBrain: 5, computerWhiz: 5 },
    genius: {},
    gloomy: {},
    glutton: {},
    good: {
        friendOfTheAnimals: 2,
        publicEnemy: -5,
        chiefOfMischief: -5,
        villainousValentine: -5,
        soulmate: 1,
        friendOfTheWorld: 2,
        goodVampire: 2,
    },
    goofball: {},
    greenFiend: {},
    hatesChildren: {},
    highMaintenance: {},
    hotHeaded: {},
    insider: {},
    jealous: {},
    kleptomaniac: {},
    lactoseIntolerant: {},
    lazy: {},
    loner: {},
    lovesOutdoors: {
        anglingAce: 5,
        countryCaretaker: 3,
        freelanceBotanist: 5,
        beachLife: 3,
    },
    maker: {},
    materialistic: {},
    mean: {},
    musicLover: {},
    neat: {},
    noncommittal: {
        serialRomantic: 5,
        soulmate: -5,
        renaissanceSim: 3,
    },
    outgoing: {
        friendOfTheAnimals: 4,
        masterActor: 1,
        friendOfTheWorld: 5,
        jokeStar: 1,
        leaderOfThePack: 4,
        partyAnimal: 3,
        worldFamousCelebrity: 2,
        serialRomantic: 1,
    },
    paranoid: {},
    perfectionist: {
        painterExtraordinaire: 5,
        musicalGenius: 5,
        bestsellingAuthor: 5,
        masterMaker: 5,
        masterChef: 5,
        lordOfTheKnits: 2,
    },
    proper: {},
    recycleDisciple: {},
    romantic: {
        serialRomantic: 5,
        soulmate: 5,
    },
    selfAbsorbed: {},
    selfAssured: {
        fabulouslyWealthy: 2,
        worldFamousCelebrity: 3,
    },
    slob: {},
    snob: {},
    squeamish: {},
    unflirty: {},
    vegetarian: {},
};

export const careers = {
    none: {
        label: "---",
    },
    actor: {
        label: "Actor/Actress",
        root: "actor",
        requires: ["getFamous"],
    },
    administrator: {
        label: "Administrator",
        root: "education",
        requires: ["discoverUniversity"],
    },
    artsCritic: {
        label: "Arts Critic",
        root: "critic",
        requires: ["cityLiving"],
    },
    author: {
        label: "Author",
        root: "writer",
    },
    bodybuilder: {
        label: "Bodybuilder",
        root: "athlete",
    },
    boss: {
        label: "Boss",
        root: "criminal",
    },
    botanist: {
        label: "Botanist",
        root: "gardener",
        requires: ["seasons"],
    },
    charityOrganizer: {
        label: "Charity Organizer",
        root: "politician",
        requires: ["cityLiving"],
    },
    chef: {
        label: "Chef",
        root: "culinary",
    },
    civilPlanner: {
        label: "Civil Planner",
        root: "civilDesigner",
        requires: ["ecoLifestyle"],
    },
    comedian: {
        label: "Comedian",
        root: "entertainer",
    },
    computerEngineer: {
        label: "Computer Engineer",
        root: "engineer",
        requires: ["discoverUniversity"],
    },
    covertOperator: {
        label: "Covert Operator",
        root: "military",
        requires: ["strangerVille"],
    },
    detective: {
        label: "Detective",
        root: "detective",
        requires: ["getToWork"],
    },
    diamondAgent: {
        label: "Diamond Agent",
        root: "secretAgent",
    },
    doctor: {
        label: "Doctor",
        root: "doctor",
    },
    environmentalManager: {
        label: "Environmental Manager",
        root: "conservationist",
        requires: ["islandLiving"],
    },
    eSportGamer: {
        label: "eSport Gamer",
        root: "techGuru",
    },
    floralDesigner: {
        label: "Floral Designer",
        root: "gardener",
        requires: ["seasons"],
    },
    foodCritic: {
        label: "Food Critic",
        root: "critic",
        requires: ["cityLiving"],
    },
    freelancerDigitalArtist: {
        label: "Digital Artist",
        root: "freelancer",
    },
    freelancerProgrammer: {
        label: "Programmer",
        root: "freelancer",
    },
    freelancerWriter: {
        label: "Writer",
        root: "freelancer",
    },
    freelancerFashionPhotographer: {
        label: "Fashion Photographer",
        root: "freelancer",
        requires: ["moschino"],
    },
    freelancerCrafter: {
        label: "Crafter",
        root: "freelancer",
        requires: ["ecoLifestyle"],
    },
    freelancerParanormalInvestigator: {
        label: "Paranormal Investigator",
        root: "freelancer",
    },
    greenTechnician: {
        label: "Green Technician",
        root: "civilDesigner",
        requires: ["ecoLifestyle"],
    },
    internetPersonality: {
        label: "Internet Personality",
        root: "socialMedia",
        requires: ["cityLiving"],
    },
    interstellarSmuggler: {
        label: "Interstellar Smuggler",
        root: "astronaut",
    },
    investor: {
        label: "Investor",
        root: "business",
    },
    journalist: {
        label: "Journalist",
        root: "writer",
    },
    judge: {
        label: "Judge",
        root: "law",
        requires: ["discoverUniversity"],
    },
    management: {
        label: "Management",
        root: "business",
    },
    marineBiologist: {
        label: "Marine Biologist",
        root: "conservationist",
        requires: ["islandLiving"],
    },
    masterOfTheReal: {
        label: "Master of the Real",
        root: "painter",
    },
    mechanicalEngineer: {
        label: "Mechanical Engineer",
        root: "engineer",
        requires: ["discoverUniversity"],
    },
    mixologist: {
        label: "Mixologist",
        root: "culinary",
    },
    musician: {
        label: "Musician",
        root: "entertainer",
    },
    officer: {
        label: "Officer",
        root: "military",
        requires: ["strangerVille"],
    },
    oracle: {
        label: "Oracle",
        root: "criminal",
    },
    patronOfTheArts: {
        label: "Patron of the Arts",
        root: "painter",
    },
    politician: {
        label: "Politician",
        root: "politician",
        requires: ["cityLiving"],
    },
    privateAttorney: {
        label: "Private Attorney",
        root: "law",
        requires: ["discoverUniversity"],
    },
    professionalAthlete: {
        label: "Professional Athlete",
        root: "athlete",
    },
    professor: {
        label: "Professor",
        root: "education",
        requires: ["discoverUniversity"],
    },
    publicRelations: {
        label: "Public Relations",
        root: "socialMedia",
        requires: ["cityLiving"],
    },
    scientist: {
        label: "Scientist",
        root: "scientist",
        requires: ["getToWork"],
    },
    selfEmployed: {
        label: "Self-Employed",
        root: "selfEmployed",
    },
    spaceRanger: {
        label: "Space Ranger",
        root: "astronaut",
    },
    startUpEntrepreneur: {
        label: "Start Up Entrepreneur",
        root: "techGuru",
    },
    stylist: {
        label: "Stylist",
        root: "styleInfluencer",
    },
    trendSetter: {
        label: "Trend Setter",
        root: "styleInfluencer",
    },
    villain: {
        label: "Villain",
        root: "secretAgent",
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
    active: {},
    adventurous: {},
    ambitious: {
        professionalAthlete: 2,
        investor: 2,
        musician: 2,
        startUpEntrepreneur: 2,
        politician: 3,
    },
    animalEnthusiast: {
        selfEmployed: 1,
    },
    artLover: {
        artsCritic: 5,
        author: 2,
        floralDesigner: 2,
        masterOfTheReal: 5,
        musician: 2,
        patronOfTheArts: 5,
        stylist: 2,
        trendSetter: 1,
    },
    bookworm: {},
    bro: {},
    catLover: {},
    cheerful: { comedian: 1, eSportGamer: 1 },
    childOfTheIslands: {},
    childOfTheOcean: {},
    childish: {},
    clumsy: {},
    creative: {
        artsCritic: 1,
        author: 5,
        chef: 3,
        floralDesigner: 3,
        masterOfTheReal: 5,
        musician: 5,
        patronOfTheArts: 1,
        stylist: 4,
        trendSetter: 2,
    },
    danceMachine: {},
    dogLover: {},
    erratic: {},
    evil: {},
    familyOriented: {},
    foodie: { chef: 5, foodCritic: 5, mixologist: 3 },
    freegan: {},
    geek: {
        computerEngineer: 5,
        eSportGamer: 5,
        freelancerProgrammer: 3,
        freelancerDigitalArtist: 1,
        mechanicalEngineer: 4,
        scientist: 5,
        startUpEntrepreneur: 3,
        oracle: 3,
    },
    genius: {},
    gloomy: {},
    glutton: {},
    good: {},
    goofball: {},
    greenFiend: {},
    hatesChildren: {},
    highMaintenance: {},
    hotHeaded: {},
    insider: {},
    jealous: {},
    kleptomaniac: {},
    lactoseIntolerant: {},
    lazy: {},
    loner: {},
    lovesOutdoors: {},
    maker: {},
    materialistic: {},
    mean: {},
    musicLover: {},
    neat: {},
    noncommittal: {
        selfEmployed: 5,
    },
    outgoing: {
        actor: 1,
        comedian: 1,
        internetPersonality: 3,
        mixologist: 1,
        politician: 3,
        publicRelations: 2,
    },
    paranoid: {},
    perfectionist: {
        artsCritic: 4,
        author: 5,
        bodybuilder: 3,
        doctor: 3,
        foodCritic: 5,
        masterOfTheReal: 5,
        patronOfTheArts: 4,
    },
    proper: {},
    recycleDisciple: {},
    romantic: {},
    selfAbsorbed: {},
    selfAssured: {
        actor: 2,
    },
    slob: {},
    snob: {},
    squeamish: {},
    unflirty: {},
    vegetarian: {},
    // aspirations
    academic: {},
    anglingAce: {},
    archaeologyScholar: {},
    beachLife: {},
    bestsellingAuthor: {},
    bigHappyFamily: {},
    bodybuilder: {},
    chiefOfMischief: {},
    cityNative: {},
    computerWhiz: {
        freelancerDigitalArtist: 1,
        freelancerProgrammer: 5,
        oracle: 3,
    },
    countryCaretaker: {
        selfEmployed: 5,
        environmentalManager: 3,
        botanist: 3,
    },
    ecoInnovator: {},
    extremeSportsEnthusiast: {},
    fabulouslyFilthy: {},
    fabulouslyWealthy: {},
    freelanceBotanist: {},
    friendOfTheAnimals: {},
    friendOfTheWorld: {},
    goodVampire: {},
    innerPeace: {},
    jokeStar: {},
    jungleExplorer: {},
    leaderOfThePack: {},
    lordOfTheKnits: {},
    mansionBaron: {},
    masterActor: {},
    masterChef: {},
    masterMaker: {},
    masterMixologist: {},
    masterVampire: {},
    mtKomorebiSightseer: {},
    musicalGenius: {},
    neighborhoodConfidante: {},
    nerdBrain: {},
    outdoorEnthusiast: {},
    painterExtraordinaire: {},
    partyAnimal: {},
    perfectlyPristine: {},
    publicEnemy: {},
    purveyorOfPotions: {},
    renaissanceSim: {},
    selfCareSpecialist: {},
    serialRomantic: {},
    soulmate: {},
    spellcraftAndSorcery: {},
    strangerVilleMystery: {},
    successfulLineage: {},
    superParent: {},
    theCurator: {},
    vampireFamily: {},
    villainousValentine: {},
    worldFamousCelebrity: {},
    zenGuru: {},
};
