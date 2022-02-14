export const traits = {
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
        return <option value={key}>{traits[key].label}</option>;
    });
};

export const toddlerTraits = {
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
        return <option value={key}>{toddlerTraits[key].label}</option>;
    });
};

export const aspirations = {
    friendOfTheAnimals: {
        label: "Friend of the Animals",
        requires: ["pets"],
    },
    bodybuilder: {
        label: "Bodybuilder",
    },
    extremeSportsEnthusiast: {
        label: "Extreme Sports Enthusiast",
        requires: ["snowyEscape"],
    },
    painterExtraordinaire: {
        label: "Painter Extraordinaire",
    },
    musicalGenius: {
        label: "Musical Genius",
    },
    bestsellingAuthor: {
        label: "Bestselling Author",
    },
    masterActor: {
        label: "Master Actor/Actress",
        requires: ["getFamous"],
    },
    masterMaker: {
        label: "Master Maker",
        requires: ["ecoLifestyle"],
    },
    lordOfTheKnits: {
        label: "Lord/Lady of the Knits",
        requires: ["niftyKnitting"],
    },
    publicEnemy: {
        label: "Public Enemy`",
    },
    chiefOfMischief: {
        label: "Chief of Mischief",
    },
    villainousValentine: {
        label: "Villainous Valentine",
    },
    successfulLineage: {
        label: "Successful Lineage",
    },
    bigHappyFamily: {
        label: "Big Happy Family",
    },
    vampireFamily: {
        label: "Vampire Family",
        requires: ["vampires"],
    },
    superParent: {
        label: "Super Parent",
        requires: ["parenthood"],
    },
    masterChef: {
        label: "Master Chef",
    },
    masterMixologist: {
        label: "Master Mixologist",
    },
    fabulouslyWealthy: {
        label: "Fabulously Wealthy",
    },
    mansionBaron: {
        label: "Mansion Baron",
    },
    renaissanceSim: {
        label: "Renaissance Sim",
    },
    nerdBrain: {
        label: "Nerd Brain",
    },
    computerWhiz: {
        label: "Computer Whiz",
    },
    masterVampire: {
        label: "Master Vampire",
        requires: ["vampires"],
    },
    archaeologyScholar: {
        label: "Archaeology Scholar",
        requires: ["jungleAdventure"],
    },
    spellcraftAndSorcery: {
        label: "Spellcraft & Sorcery",
        requires: ["realmOfMagic"],
    },
    academic: {
        label: "Academic",
        requires: ["discoverUniversity"],
    },
    serialRomantic: {
        label: "serialRomantic",
    },
    soulmate: {
        label: "Soulmate",
    },
    cityNative: {
        label: "City Native",
        requires: ["cityLiving"],
    },
    strangerVilleMystery: {
        label: "StrangerVille Mystery",
        requires: ["strangerville"],
    },
    beachLife: {
        label: "Beach Life",
        requires: ["islandLiving"],
    },
    mtKomorebiSightseer: {
        label: "Mt. Komorebi Sightseer",
        requires: ["snowyEscape"],
    },
    perfectlyPristine: {
        label: "Perfectly Pristine",
        requires: ["bustTheDust"],
    },
    fabulouslyFilthy: {
        label: "Fabulously Filthy",
        requires: ["bustTheDust"],
    },
    freelanceBotanist: {
        label: "Freelance Botanist",
    },
    theCurator: {
        label: "The Curator",
    },
    anglingAce: {
        label: "Angling Ace",
    },
    outdoorEnthusiast: {
        label: "Outdoor Enthusiast",
        requires: ["outdoorRetreat"],
    },
    jungleExplorer: {
        label: "Jungle Explorer",
        requires: ["jungleAdventure"],
    },
    purveyorOfPotions: {
        label: "Purveyor of Potions",
        requires: ["realmOfMagic"],
    },
    ecoInnovator: {
        label: "Eco Innovator",
        requires: ["ecoLifestyle"],
    },
    countryCaretaker: {
        label: "Country Caretaker",
        requires: ["cottageLiving"],
    },
    jokeStar: {
        label: "Joke Star",
    },
    partyAnimal: {
        label: "Party Animal",
    },
    friendOfTheWorld: {
        label: "Friend of the World",
    },
    neighborhoodConfidante: {
        label: "Neighborhood Confidante",
    },
    leaderOfThePack: {
        label: "leaderOfThePack",
        requires: ["getTogether"],
    },
    goodVampire: {
        label: "Good Vampire",
        requires: ["vampires"],
    },
    worldFamousCelebrity: {
        label: "World-Famous Celebrity",
        requires: ["getFamous"],
    },
    innerPeace: {
        label: "Inner Peace",
        requires: ["spaDay"],
    },
    selfCareSpecialist: {
        label: "Self-Care Specialist",
        requires: ["spaDay"],
    },
    zenGuru: {
        label: "Zen Guru",
        requires: ["spaDay"],
    },
};

export const aspirationOptions = () => {
    return Object.keys(aspirations).map((key) => (
        <option value={key}>{aspirations[key].label}</option>
    ));
};
