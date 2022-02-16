import React, { useState, useEffect } from "react";

import {
    traits,
    traitOptions,
    lifetimeWishes,
    lifetimeWishOptions,
} from "../../helpers/sims-3-data";

const SimInput = ({ setSimInputData, simInputData }) => {
    const [age, setAge] = useState(0);
    const [trait1, setTrait1] = useState({});
    const [trait1Input, setTrait1Input] = useState("none");
    const [trait2, setTrait2] = useState({});
    const [trait2Input, setTrait2Input] = useState("none");
    const [trait3, setTrait3] = useState({});
    const [trait3Input, setTrait3Input] = useState("none");
    const [trait4, setTrait4] = useState({});
    const [trait4Input, setTrait4Input] = useState("none");
    const [trait5, setTrait5] = useState({});
    const [trait5Input, setTrait5Input] = useState("none");
    const [lifetimeWish, setLifetimeWish] = useState({});
    const [lifetimeWishInput, setLifetimeWishInput] = useState("none");

    const handleChange = (event) => {
        if (event.target.name === "ageSelect") {
            setAge(event.target.value);
        } else if (event.target.name === "trait1Select") {
            setTrait1({ [event.target.value]: traits[event.target.value] });
            setTrait1Input(event.target.value);
        } else if (event.target.name === "trait2Select") {
            setTrait2({ [event.target.value]: traits[event.target.value] });
            setTrait2Input(event.target.value);
        } else if (event.target.name === "trait3Select") {
            setTrait3({ [event.target.value]: traits[event.target.value] });
            setTrait3Input(event.target.value);
        } else if (event.target.name === "trait4Select") {
            setTrait4({ [event.target.value]: traits[event.target.value] });
            setTrait4Input(event.target.value);
        } else if (event.target.name === "trait5Select") {
            setTrait5({ [event.target.value]: traits[event.target.value] });
            setTrait5Input(event.target.value);
        }
    };

    const handleSubmit = () => {
        setSimInputData({
            age: age,
            traits: [trait1, trait2, trait3, trait4, trait5],
            lifetimeWish: lifetimeWishes[lifetimeWish],
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
                <label htmlFor="trait4Select">Trait 4</label>
                <select name="trait4Select" onChange={handleChange} value={trait4Input}>
                    {traitOptions()}
                </select>
            </div>
            <div className="input-wrapper">
                <label htmlFor="trait5Select">Trait 5</label>
                <select name="trait5Select" onChange={handleChange} value={trait5Input}>
                    {traitOptions()}
                </select>
            </div>
            <div className="input-wrapper">
                <label htmlFor="lifetimeWishSelect">Aspiration</label>
                <select name="lifetimeWishSelect" onChange={handleChange} value={lifetimeWishInput}>
                    {lifetimeWishOptions()}
                </select>
            </div>
            <button onClick={handleSubmit}>Generate</button>
        </div>
    );
};

export default SimInput;
