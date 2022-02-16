import React, { useState, useEffect } from "react";
import sortArray from "sort-array";

import { lifetimeWishes } from "../../helpers/sims-3-data";

const SimOutput = ({ simInputData, weights }) => {
    const [lifetimeWishRender, setLifetimeWishRender] = useState([]);
    const [careerRender, setCareerRender] = useState([]);
    const [traits, setTraits] = useState([]);

    useEffect(() => {
        renderLifetimeWishes();
        setTraits(simInputData.traits);
        // renderCareers();
    }, [weights, simInputData]);

    const renderLifetimeWishes = () => {
        let ltwArray = [];
        for (const [key, value] of Object.entries(weights.lifetimeWish)) {
            ltwArray.push({ name: key, weight: value });
        }
        ltwArray = sortArray(ltwArray, {
            by: "weight",
            order: "desc",
        }).slice(0, 5);
        setLifetimeWishRender(
            ltwArray.map((lifetimeWish) => {
                return (
                    <div key={lifetimeWish.name} className="aspiration-wrapper">
                        <div className="name">{lifetimeWishes[lifetimeWish.name].label}</div>
                        <div className="weight">{lifetimeWish.weight}</div>
                    </div>
                );
            })
        );
    };

    const renderTraits = () => {
        return traits.map((trait) => {
            return (
                <div key={Object.keys(trait)[0]} className="trait-wrapper">
                    {Object.values(trait)[0].label}
                </div>
            );
        });
    };

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
