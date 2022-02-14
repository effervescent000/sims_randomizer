import React, { useState } from "react";

import SimInput from "./sim-input";

const GeneratePanel = (props) => {
    const [simInputData, setSimInputData] = useState({});
    return (
        <div className="generate-panel">
            <SimInput key="input" setSimInputData={setSimInputData} />
            <SimInput key="output" simInputData={simInputData} output />
        </div>
    );
};

export default GeneratePanel;
