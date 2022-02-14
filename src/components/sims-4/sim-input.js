import React, { useState } from "react";

import {
    traits,
    traitOptions,
    toddlerTraits,
    toddlerTraitOptions,
    aspirations,
    aspirationOptions,
} from "../../helpers/sims-4-data";

const SimInput = ({ setSimInputData, simInputData, output }) => {
    const [age, setAge] = useState(0);
    const [toddlerTrait, setToddlerTrait] = useState({});
    const [trait1, setTrait1] = useState({});
    const [trait2, setTrait2] = useState({});
    const [trait3, setTrait3] = useState({});
    const [aspiration, setAspiration] = useState({});

    const handleChange = (event) => {
        if (event.target.name === "toddlerTraitSelect") {
            setToddlerTrait({ [event.target.value]: toddlerTraits[event.target.value] });
        } else if (event.target.name === "trait1Select") {
            setTrait1({ [event.target.value]: traits[event.target.value] });
        } else if (event.target.name === "trait2Select") {
            setTrait2({ [event.target.value]: traits[event.target.value] });
        } else if (event.target.name === "trait3Select") {
            setTrait3({ [event.target.value]: traits[event.target.value] });
        } else if (event.target.name === "ageSelect") {
            setAge(event.target.value);
        } else if (event.target.name === "aspirationSelect") {
            setAspiration({ [event.target.value]: aspirations[event.target.value] });
        }
    };

    const handleSubmit = (event) => {
        setSimInputData({
            age: age,
            toddlerTrait: toddlerTrait,
            traits: [trait1, trait2, trait3],
            aspiration: aspiration,
        });
    };

    return (
        <div className="sim-input-wrapper">
            <div className="input-wrapper">
                <label htmlFor="ageSelect">Age</label>
                <select name="ageSelect" onChange={handleChange}>
                    <option value={0}>Baby</option>
                    <option value={1}>Toddler</option>
                    <option value={2}>Child</option>
                    <option value={3}>Teen</option>
                    <option value={4}>YA+</option>
                </select>
            </div>
            <div className="input-wrapper">
                <label htmlFor="toddlerTraitSelect">Toddler trait</label>
                <select name="toddlerTraitSelect" onChange={handleChange}>
                    {toddlerTraitOptions()}
                </select>
            </div>
            <div className="input-wrapper">
                <label htmlFor="trait1Select">Trait 1</label>
                <select name="trait1Select" onChange={handleChange}>
                    {traitOptions()}
                </select>
            </div>
            <div className="input-wrapper">
                <label htmlFor="trait2Select">Trait 2</label>
                <select name="trait2Select" onChange={handleChange}>
                    {traitOptions()}
                </select>
            </div>
            <div className="input-wrapper">
                <label htmlFor="trait2Select">Trait 3</label>
                <select name="trait2Select" onChange={handleChange}>
                    {traitOptions()}
                </select>
            </div>
            <div className="input-wrapper">
                <label htmlFor="aspiratonSelect">Aspiration</label>
                <select name="aspiratonSelect" onChange={handleChange}>
                    {aspirationOptions()}
                </select>
            </div>
            {output ? <button onClick={handleSubmit}>Generate</button> : null}
        </div>
    );
};

export default SimInput;
