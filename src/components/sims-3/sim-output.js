import React, { useState, useEffect } from "react";
import sortArray from "sort-array";

import { traits, lifetimeWishes } from "../../helpers/sims-3-data";

const SimOutput = ({ simInputData, weights }) => {
    const [lifetimeWishRender, setLifetimeWishRender] = useState([]);
    const [careerRender, setCareerRender] = useState([]);
    const [traits, setTraits] = useState([]);

    return (
        <div>
            {simInputData && Object.keys(simInputData).length > 0 ? (
                <div className="sim-output-wrapper">
                    <div className="traits-wrapper">{renderTraits()}</div>
                    <div className="aspirations-wrapper">{lifetimeWishRender}</div>
                    <div className="careers-wrapper">{careerRender}</div>
                </div>
            ) : null}
        </div>
    );
};

export default SimOutput;
