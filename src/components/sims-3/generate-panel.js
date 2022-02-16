import React, { useState, useEffect, useContext } from "react";

import SimInput from "./sim-input";
import SimOutput from "./sim-output";
import { SettingsContext } from "../../settings-context";

import {
    lifetimeWishes,
    careers,
    ltwWeightMapping,
    careerWeightMapping,
} from "../../helpers/sims-3-data";

const GeneratePanel = (props) => {
    const { settings } = useContext(SettingsContext);
    const [simInputData, setSimInputData] = useState({
        age: 0,
        toddlerTrait: {},
        traits: [],
        aspiration: {},
    });
    const [careerWeights, setCareerWeights] = useState({});
    const [lifetimeWishWeights, setLifetimeWishWeights] = useState({});

    const addWeights = (weights, newWeights) => {
        for (const [key, value] of Object.entries(newWeights)) {
            if (checkRequirements(key)) {
                weights[key] += value;
            }
        }
        return weights;
    };

    const checkRequirements = (key) => {
        key = lifetimeWishes[key] ? lifetimeWishes[key] : careers[key];
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
        let ltwWeights = {};
        let carWeights = {};
        for (const lifetimeWish of Object.keys(lifetimeWishes)) {
            ltwWeights[lifetimeWish] = 0;
        }
        for (const career of Object.keys(careers)) {
            carWeights[career] = 0;
        }

        if (simInputData && Object.keys(simInputData).length > 0) {
            for (const traitObject of simInputData.traits) {
                if (Object.keys(traitObject).length > 0) {
                    const traitName = Object.keys(traitObject)[0];
                    ltwWeights = addWeights(ltwWeights, ltwWeightMapping[traitName]);
                    carWeights = addWeights(carWeights, careerWeightMapping[traitName]);
                }
            }

            if (simInputData.lifetimeWish && Object.keys(simInputData.lifetimeWish).length > 0) {
                carWeights = addWeights(
                    carWeights,
                    careerWeightMapping[Object.keys(simInputData.lifetimeWish)[0]]
                );
            }

            setLifetimeWishWeights(ltwWeights);
            setCareerWeights(carWeights);
        }
    }, [simInputData]);

    return (
        <div className="generate-panel">
            <SimInput key="input" setSimInputData={setSimInputData} />
            <SimOutput
                key="output"
                simInputData={simInputData}
                weights={{ lifetimeWish: lifetimeWishWeights, career: careerWeights }}
            />
        </div>
    );
};

export default GeneratePanel;
