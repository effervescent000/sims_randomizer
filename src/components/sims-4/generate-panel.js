import React, { useState, useEffect } from "react";

import SimInput from "./sim-input";
import SimOutput from "./sim-output";

import { aspirations } from "../../helpers/sims-4-data";

const GeneratePanel = (props) => {
    const [simInputData, setSimInputData] = useState({
        age: 0,
        toddlerTrait: {},
        traits: [],
        aspiration: {},
    });
    // const aspirationWeights = {};
    const careerWeights = {};
    const [aspirationWeights, setAspirationWeights] = useState({});

    useEffect(() => {
        const aspWeights = {};
        for (const aspiration of Object.keys(aspirations)) {
            aspWeights[aspiration] = 0;
        }

        if (simInputData && Object.keys(simInputData).length > 0) {
            for (const traitObject of simInputData.traits) {
                const traitName = Object.keys(traitObject)[0];
                if (traitName === "artLover") {
                    aspWeights.painterExtraordinaire += 5;
                    aspWeights.musicalGenius += 2;
                    aspWeights.bestsellingAuthor += 2;
                    aspWeights.lordOfTheKnits += 2;
                } else if (traitName === "creative") {
                    aspWeights.painterExtraordinaire += 5;
                    aspWeights.musicalGenius += 5;
                    aspWeights.bestsellingAuthor += 5;
                    aspWeights.masterActor += 4;
                    aspWeights.masterChef += 3;
                    aspWeights.lordOfTheKnits += 2;
                } else if (traitName === "foodie") {
                    aspWeights.masterChef += 5;
                    aspWeights.masterMixologist += 3;
                } else if (traitName === "geek") {
                    aspWeights.bodybuilder += -2;
                    aspWeights.renaissanceSim += 2;
                    aspWeights.nerdBrain += 5;
                    aspWeights.computerWhiz += 5;
                } else if (traitName === "good") {
                    aspWeights.friendOfTheAnimals += 2;
                    aspWeights.publicEnemy += -5;
                    aspWeights.chiefOfMischief += -5;
                    aspWeights.villainousValentine += -5;
                    aspWeights.soulmate += 1;
                    aspWeights.friendOfTheWorld += 2;
                    aspWeights.goodVampire += 2;
                } else if (traitName === "perfectionist") {
                    aspWeights.painterExtraordinaire += 5;
                    aspWeights.musicalGenius += 5;
                    aspWeights.bestsellingAuthor += 5;
                    aspWeights.masterMaker += 5;
                    aspWeights.masterChef += 5;
                    aspWeights.lordOfTheKnits += 2;
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
