import React, { useState, useEffect } from "react";
import sortArray from "sort-array";

const SimOutput = ({ simInputData, weights }) => {
    const [aspirationRender, setAspirationRender] = useState([]);
    const [traits, setTraits] = useState([]);

    useEffect(() => {
        renderAspirations();
        setTraits(simInputData.traits);
        console.log(weights);
    }, [weights, simInputData]);

    const renderTraits = () => {
        return traits.map((trait) => {
            return (
                <div key={Object.keys(trait)[0]} className="trait-wrapper">
                    {Object.values(trait)[0].label}
                </div>
            );
        });
    };

    const renderAspirations = () => {
        let aspirationArray = [];
        for (const [key, value] of Object.entries(weights.aspiration)) {
            aspirationArray.push({ name: key, weight: value });
        }
        aspirationArray = sortArray(aspirationArray, {
            by: "weight",
            order: "desc",
        }).slice(0, 5);
        setAspirationRender(
            aspirationArray.map((aspiration) => {
                return (
                    <div key={aspiration.name} className="aspiration-wrapper">
                        <div className="name">{aspiration.name}</div>
                        <div className="weight">{aspiration.weight}</div>
                    </div>
                );
            })
        );
    };

    return (
        <div>
            {simInputData && Object.keys(simInputData).length > 0 ? (
                <div className="sim-output-wrapper">
                    <div className="traits-wrapper">{renderTraits()}</div>
                    <div className="aspirations-wrapper">{aspirationRender}</div>
                </div>
            ) : null}
        </div>
    );
};

export default SimOutput;
