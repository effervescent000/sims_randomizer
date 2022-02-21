import React, { useState, useEffect } from "react";
import sortArray from "sort-array";

import { lifetimeWishes, careers } from "../../helpers/sims-3-data";
import { randomChoice } from "../../helpers/random-choice";

const SimOutput = ({ simInputData, weights }) => {
    const [lifetimeWishRender, setLifetimeWishRender] = useState([]);
    const [careerRender, setCareerRender] = useState([]);
    const [traits, setTraits] = useState([]);

    useEffect(() => {
        renderLifetimeWishes();
        setTraits(simInputData.traits);
        renderCareers();
    }, [weights, simInputData]);

    const renderLifetimeWishes = () => {
        let ltwArray = [];
        for (const [key, value] of Object.entries(weights.lifetimeWish)) {
            ltwArray.push({ name: key, weight: value });
        }
        ltwArray = sortArray([...ltwArray], {
            by: "weight",
            order: "desc",
        }).slice(0, 5);
        if (ltwArray.length > 0) {
            const ltw = randomChoice(ltwArray);
            setLifetimeWishRender(
                ltwArray.map((wish) => {
                    return (
                        <div key={wish.name} className="aspiration-wrapper">
                            <div className={`name ${wish.name === ltw ? "bold" : ""}`}>
                                {lifetimeWishes[wish.name].label}
                            </div>
                            <div className="weight">{wish.weight}</div>
                        </div>
                    );
                })
            );
        }
    };

    const renderCareers = () => {
        let carArray = [];
        for (const [key, value] of Object.entries(weights.career)) {
            carArray.push({ name: key, weight: value });
        }
        carArray = sortArray(carArray, {
            by: "weight",
            order: "desc",
        }).slice(0, 5);
        if (carArray.length > 0) {
            setCareerRender(
                carArray.map((career) => {
                    return (
                        <div key={career.name} className="career-wrapper">
                            <div className="name">{careers[career.name].label}</div>
                            <div className="weight">{career.weight}</div>
                        </div>
                    );
                })
            );
        }
    };

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
