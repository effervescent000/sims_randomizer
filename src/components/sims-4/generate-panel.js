import React, { useState, useEffect, useContext } from "react";

import SimInput from "./sim-input";
import SimOutput from "./sim-output";

import {
    aspirations,
    careers,
    aspirationWeightMapping,
    careerWeightMapping,
} from "../../helpers/sims-4-data";
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
                    aspWeights = addWeight(aspWeights, aspirationWeightMapping[traitName]);
                    carWeights = addWeight(carWeights, careerWeightMapping[traitName]);
                }
            }

            if (Object.keys(simInputData.aspiration).length > 0) {
                const asp = Object.keys(simInputData.aspiration)[0];
                carWeights = addWeight(carWeights, careerWeightMapping[asp]);
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
