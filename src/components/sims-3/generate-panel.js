import React, { useState, useEffect, useContext } from "react";

import SimInput from "./sim-input";
import SimOutput from "./sim-output";
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
