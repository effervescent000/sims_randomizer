import React, { useState, useEffect } from "react";

import {
    traits,
    traitOptions,
    toddlerTraits,
    toddlerTraitOptions,
    aspirations,
    aspirationOptions,
} from "../../helpers/sims-4-data";

const SimInput = ({ setSimInputData, simInputData, output }) => {
    console.log(simInputData);
    const [age, setAge] = useState(0);
    const [toddlerTrait, setToddlerTrait] = useState({});
    const [toddlerTraitInput, setToddlerTraitInput] = useState("none");
    const [trait1, setTrait1] = useState({});
    const [trait1Input, setTrait1Input] = useState("none");
    const [trait2, setTrait2] = useState({});
    const [trait2Input, setTrait2Input] = useState("none");
    const [trait3, setTrait3] = useState({});
    const [trait3Input, setTrait3Input] = useState("none");
    const [aspiration, setAspiration] = useState({});
    const [aspirationInput, setAspirationInput] = useState("none");

    useEffect(() => {
        setToddlerTraitInput(
            simInputData && Object.keys(simInputData).length > 0
                ? `${Object.keys(simInputData.toddlerTrait)[0]}`
                : `${Object.keys(toddlerTraits)[0]}`
        );
        setTrait1Input(
            simInputData && Object.keys(simInputData).length > 0
                ? simInputData.traits.length > 0 && Object.keys(simInputData.traits[0]).length > 0
                    ? `${Object.keys(simInputData.traits[0])[0]}`
                    : `${Object.keys(traits)[0]}`
                : `${Object.keys(traits)[0]}`
        );
        setTrait2Input(
            simInputData && Object.keys(simInputData).length > 0
                ? simInputData.traits.length > 0 && Object.keys(simInputData.traits[1]).length > 0
                    ? `${Object.keys(simInputData.traits[1])[0]}`
                    : `${Object.keys(traits)[0]}`
                : `${Object.keys(traits)[0]}`
        );
        setTrait3Input(
            simInputData && Object.keys(simInputData).length > 0
                ? simInputData.traits.length > 0 && Object.keys(simInputData.traits[2]).length > 0
                    ? `${Object.keys(simInputData.traits[2])[0]}`
                    : `${Object.keys(traits)[0]}`
                : `${Object.keys(traits)[0]}`
        );
        setAspirationInput(
            simInputData && Object.keys(simInputData).length > 0
                ? `${Object.keys(simInputData.aspiration)[0]}`
                : `${Object.keys(aspirations)[0]}`
        );
    }, [simInputData]);

    const handleChange = (event) => {
        if (event.target.name === "toddlerTraitSelect") {
            setToddlerTrait({ [event.target.value]: toddlerTraits[event.target.value] });
            setToddlerTraitInput(event.target.value);
        } else if (event.target.name === "trait1Select") {
            setTrait1({ [event.target.value]: traits[event.target.value] });
            setTrait1Input(event.target.value);
        } else if (event.target.name === "trait2Select") {
            setTrait2({ [event.target.value]: traits[event.target.value] });
            setTrait2Input(event.target.value);
        } else if (event.target.name === "trait3Select") {
            setTrait3({ [event.target.value]: traits[event.target.value] });
            setTrait3Input(event.target.value);
        } else if (event.target.name === "ageSelect") {
            setAge(event.target.value);
        } else if (event.target.name === "aspirationSelect") {
            setAspiration({ [event.target.value]: aspirations[event.target.value] });
            setAspirationInput(event.target.value);
        }
    };

    const handleSubmit = () => {
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
                <select name="toddlerTraitSelect" onChange={handleChange} value={toddlerTraitInput}>
                    {toddlerTraitOptions()}
                </select>
            </div>
            <div className="input-wrapper">
                <label htmlFor="trait1Select">Trait 1</label>
                <select name="trait1Select" onChange={handleChange} value={trait1Input}>
                    {traitOptions()}
                </select>
            </div>
            <div className="input-wrapper">
                <label htmlFor="trait2Select">Trait 2</label>
                <select name="trait2Select" onChange={handleChange} value={trait2Input}>
                    {traitOptions()}
                </select>
            </div>
            <div className="input-wrapper">
                <label htmlFor="trait3Select">Trait 3</label>
                <select name="trait3Select" onChange={handleChange} value={trait3Input}>
                    {traitOptions()}
                </select>
            </div>
            <div className="input-wrapper">
                <label htmlFor="aspiratonSelect">Aspiration</label>
                <select name="aspiratonSelect" onChange={handleChange} value={aspirationInput}>
                    {aspirationOptions()}
                </select>
            </div>
            {!output ? <button onClick={handleSubmit}>Generate</button> : null}
        </div>
    );
};

export default SimInput;
