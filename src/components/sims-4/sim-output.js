import React, { useState, useEffect } from "react";
import sortArray from "sort-array";

import { aspirations, careers } from "../../helpers/sims-4-data";
import { randomChoice } from "../../helpers/random-choice";

const SimOutput = ({ simInputData, weights }) => {
    const [aspirationRender, setAspirationRender] = useState([]);
    const [careerRender, setCareerRender] = useState([]);
    const [traits, setTraits] = useState([]);

    useEffect(() => {
        renderAspirations();
        setTraits(simInputData.traits);
        renderCareers();
    }, [weights, simInputData]);

    const renderTraits = () => {
        return traits.map((trait, index) => {
            if (Object.keys(trait).length > 0) {
                return (
                    <div key={Object.keys(trait)[0]} className="trait-wrapper">
                        {Object.values(trait)[0].label}
                    </div>
                );
            } else {
                return <div key={index}></div>;
            }
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
        const asp = randomChoice(aspirationArray);
        setAspirationRender(
            aspirationArray.map((aspiration) => {
                return (
                    <div key={aspiration.name} className="aspiration-wrapper">
                        <div className={`name${aspiration.name === asp ? " bold" : ""}`}>
                            {aspirations[aspiration.name].label}
                        </div>
                        <div className="weight">{aspiration.weight}</div>
                    </div>
                );
            })
        );
    };

    const renderCareers = () => {
        let careersArray = [];
        for (const [key, value] of Object.entries(weights.career)) {
            careersArray.push({ name: key, weight: value });
        }
        careersArray = sortArray(careersArray, {
            by: "weight",
            order: "desc",
        }).slice(0, 5);
        const car = randomChoice(careersArray);
        setCareerRender(
            careersArray.map((career) => {
                return (
                    <div key={career.name} className="career-wrapper">
                        <div className={`name${career.name === car ? " bold" : ""}`}>
                            {careers[career.name].label}
                        </div>
                        <div className="weight">{career.weight}</div>
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
                    <div className="careers-wrapper">{careerRender}</div>
                </div>
            ) : null}
        </div>
    );
};

export default SimOutput;
