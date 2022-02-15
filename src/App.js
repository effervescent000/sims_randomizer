import "bootstrap/scss/bootstrap.scss";
import "./styles/main.scss";

import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header";

import Sims4Wrapper from "./components/sims-4/sims-4-wrapper";
import Sims3Wrapper from "./components/sims-3/sims-3-wrapper";
import { SettingsContext } from "./settings-context";

function App() {
    const [settings, setSettings] = useState({});

    useEffect(() => {
        const settingsCookie = Cookies.get("settings");
        if (settingsCookie && Object.keys(settings).length === 0) {
            setSettings(JSON.parse(settingsCookie));
        }
    }, []);

    return (
        <div className="App">
            <SettingsContext.Provider value={{ settings, setSettings }}>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Sims4Wrapper />
                    </Route>
                    <Route path="/ts3">
                        <Sims3Wrapper />
                    </Route>
                </Switch>
            </SettingsContext.Provider>
        </div>
    );
}

export default App;
