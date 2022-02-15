import React, { useState, useEffect } from "react";

const SimInput = (props) => {
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
        </div>
    );
};

export default SimInput;
