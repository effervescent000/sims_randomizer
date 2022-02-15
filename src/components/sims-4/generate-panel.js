import React, { useState, useEffect, useContext } from "react";

import SimInput from "./sim-input";
import SimOutput from "./sim-output";

import { aspirations, careers } from "../../helpers/sims-4-data";
import { SettingsContext } from "../../settings-context";

const GeneratePanel = (props) => {
    const { settings } = useContext(SettingsContext);
    const [simInputData, setSimInputData] = useState({
        age: 0,
        toddlerTrait: {},
        traits: [],
        aspiration: {},
    });
    const [careerWeights, setCareerWeights] = useState({});
    const [aspirationWeights, setAspirationWeights] = useState({});

    const addWeight = (weights, newWeights) => {
        for (const [key, value] of Object.entries(newWeights)) {
            if (checkRequirements(key)) {
                weights[key] += value;
            }
        }
        return weights;
    };

    const checkRequirements = (key) => {
        key = aspirations[key] ? aspirations[key] : careers[key];
        if (key.requires && key.requires.length > 0) {
            for (const requirement of key.requires) {
                if (!settings[requirement]) {
                    return false;
                }
            }
        }
        return true;
    };

    useEffect(() => {
        let aspWeights = {};
        let carWeights = {};
        for (const aspiration of Object.keys(aspirations)) {
            aspWeights[aspiration] = 0;
        }
        for (const career of Object.keys(careers)) {
            carWeights[career] = 0;
        }

        if (simInputData && Object.keys(simInputData).length > 0) {
            for (const traitObject of simInputData.traits) {
                if (Object.keys(traitObject).length > 0) {
                    const traitName = Object.keys(traitObject)[0];
                    if (traitName === "artLover") {
                        aspWeights = addWeight(aspWeights, {
                            painterExtraordinaire: 5,
                            musicalGenius: 2,
                            bestsellingAuthor: 2,
                            lordOfTheKnits: 2,
                        });
                        carWeights = addWeight(carWeights, {
                            artsCritic: 5,
                            author: 2,
                            floralDesigner: 2,
                            masterOfTheReal: 5,
                            musician: 2,
                            patronOfTheArts: 5,
                            stylist: 2,
                            trendSetter: 1,
                        });
                    } else if (traitName === "cheerful") {
                        aspWeights = addWeight(aspWeights, {
                            beachLife: 1,
                            chiefOfMischief: 1,
                            cityNative: 1,
                            countryCaretaker: 1,
                            friendOfTheAnimals: 1,
                            friendOfTheWorld: 1,
                            innerPeace: 1,
                            jokeStar: 2,
                            selfCareSpecialist: 1,
                        });
                        carWeights = addWeight(carWeights, {
                            comedian: 1,
                            eSportGamer: 1,
                        });
                    } else if (traitName === "creative") {
                        aspWeights = addWeight(aspWeights, {
                            painterExtraordinaire: 5,
                            musicalGenius: 5,
                            bestsellingAuthor: 5,
                            masterActor: 4,
                            masterChef: 3,
                            lordOfTheKnits: 2,
                        });
                        carWeights = addWeight(carWeights, {
                            artsCritic: 1,
                            author: 5,
                            chef: 3,
                            floralDesigner: 3,
                            masterOfTheReal: 5,
                            musician: 5,
                            patronOfTheArts: 1,
                            stylist: 4,
                            trendSetter: 2,
                        });
                    } else if (traitName === "foodie") {
                        aspWeights = addWeight(aspWeights, {
                            masterChef: 5,
                            masterMixologist: 3,
                        });
                        carWeights = addWeight(carWeights, {
                            chef: 5,
                            foodCritic: 5,
                            mixologist: 3,
                        });
                    } else if (traitName === "geek") {
                        aspWeights = addWeight(aspWeights, {
                            bodybuilder: -2,
                            renaissanceSim: 2,
                            nerdBrain: 5,
                            computerWhiz: 5,
                        });
                        carWeights = addWeight(carWeights, {
                            computerEngineer: 5,
                            eSportGamer: 5,
                            freelancer: 3,
                            mechanicalEngineer: 4,
                            scientist: 5,
                            startUpEntrepreneur: 3,
                        });
                    } else if (traitName === "good") {
                        aspWeights = addWeight(aspWeights, {
                            friendOfTheAnimals: 2,
                            publicEnemy: -5,
                            chiefOfMischief: -5,
                            villainousValentine: -5,
                            soulmate: 1,
                            friendOfTheWorld: 2,
                            goodVampire: 2,
                        });
                    } else if (traitName === "outgoing") {
                        aspWeights = addWeight(aspWeights, {
                            friendOfTheAnimals: 4,
                            masterActor: 1,
                            friendOfTheWorld: 5,
                            jokeStar: 1,
                            leaderOfThePack: 4,
                            partyAnimal: 3,
                            worldFamousCelebrity: 2,
                        });
                        carWeights = addWeight(carWeights, {
                            actor: 1,
                            comedian: 1,
                            internetPersonality: 3,
                            mixologist: 1,
                            politician: 3,
                            publicRelations: 2,
                        });
                    } else if (traitName === "perfectionist") {
                        aspWeights = addWeight(aspWeights, {
                            painterExtraordinaire: 5,
                            musicalGenius: 5,
                            bestsellingAuthor: 5,
                            masterMaker: 5,
                            masterChef: 5,
                            lordOfTheKnits: 2,
                        });
                        carWeights = addWeight(carWeights, {
                            artsCritic: 4,
                            author: 5,
                            bodybuilder: 3,
                            doctor: 3,
                            foodCritic: 5,
                            masterOfTheReal: 5,
                            patronOfTheArts: 4,
                        });
                    }
                }
            }

            if (Object.keys(simInputData.aspiration).length > 0) {
                const asp = Object.keys(simInputData.aspiration)[0];
                if (asp === "masterChef") {
                    carWeights = addWeight(carWeights, {
                        masterChef: 5,
                    });
                }
            }

            setAspirationWeights(aspWeights);
            setCareerWeights(carWeights);
        }
    }, [simInputData]);

    return (
        <div className="generate-panel">
            <SimInput key="input" setSimInputData={setSimInputData} />
            <SimOutput
                key="output"
                simInputData={simInputData}
                weights={{ aspiration: aspirationWeights, career: careerWeights }}
            />
        </div>
    );
};

export default GeneratePanel;
