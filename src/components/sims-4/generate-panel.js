import React, { useState, useEffect, useContext } from "react";

import SimInput from "./sim-input";
import SimOutput from "./sim-output";

import { aspirations } from "../../helpers/sims-4-data";
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

    const checkRequirements = (obj) => {
        if (obj.requires && obj.requires.length > 0) {
            for (const requirement of obj.requires) {
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

        if (simInputData && Object.keys(simInputData).length > 0) {
            for (const traitObject of simInputData.traits) {
                const traitName = Object.keys(traitObject)[0];
                if (traitName === "artLover") {
                    aspWeights = addWeight(aspWeights, {
                        painterExtraordinaire: 5,
                        musicalGenius: 2,
                        bestsellingAuthor: 2,
                        lordOfTheKnits: 2,
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
                } else if (traitName === "foodie") {
                    aspWeights = addWeight(aspWeights, {
                        masterChef: 5,
                        masterMixologist: 3,
                    });
                } else if (traitName === "geek") {
                    aspWeights = addWeight(aspWeights, {
                        bodybuilder: -2,
                        renaissanceSim: 2,
                        nerdBrain: 5,
                        computerWhiz: 5,
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
                } else if (traitName === "perfectionist") {
                    aspWeights = addWeight(aspWeights, {
                        painterExtraordinaire: 5,
                        musicalGenius: 5,
                        bestsellingAuthor: 5,
                        masterMaker: 5,
                        masterChef: 5,
                        lordOfTheKnits: 2,
                    });
                }
            }
            setAspirationWeights(aspWeights);
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
