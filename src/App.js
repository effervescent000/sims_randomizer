// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GeneratePanel from "./components/sims-4/generate-panel";

function App() {
    return (
        <div className="App">
            <GeneratePanel />
        </div>
    );
}

export default App;
