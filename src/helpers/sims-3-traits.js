const sims3Traits = {
    absentMinded: {
        label: "Absent-minded",
        conflicts: ["perceptive"],
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
    bookworm: {},
    brave: {
        label: "Brave",
        conflicts: ["coward", "loser"],
    },

    cantStandArt: {},
    computerWhiz: {},
    clumsy: {
        label: "Clumsy",
        conflicts: [],
    },
    couchPotato: {
        label: "Couch Potato",
        conflicts: [],
    },
    disciplined: {
        label: "Disciplined",
        conflicts: ["couchPotato"],
        requires: "worldAdventures",
    },
    easilyImpressed: {
        label: "Easily impressed",
        conflicts: ["snob"],
    },

    eccentric: {},
    evil: {
        label: "Evil",
        conflicts: ["good"],
    },

    excitable: {
        label: "Excitable",
        conflicts: [],
    },
    friendly: {
        label: "Friendly",
        conflicts: [],
    },
    gatherer: {},
    genius: {
        label: "Genius",
        conflicts: [],
    },
    greenThumb: {},
    handy: {},
    insane: {},
    naturalCook: {},
    neurotic: {},
    nurturing: {},
    perceptive: {},
    photographersEye: {},
    savvySculptor: {},
    unstable: {},
    virtuoso: {},
};
