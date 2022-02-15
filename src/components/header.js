import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

import SettingsModal from "./settings-modal";

const Header = (props) => {
    const [settingsModalIsOpen, setSettingsModalIsOpen] = useState(false);

    const toggleSettingsModal = () => {
        setSettingsModalIsOpen(!settingsModalIsOpen);
    };

    const handleClick = (event) => {
        setSettingsModalIsOpen(true);
    };

    return (
        <div className="header">
            <div className="left-side">
                <Navbar>
                    <NavbarBrand href="/">Sims Randomizer</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <NavLink href="/ts4">Sims 4</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
            <div className="right-side">
                <button name="settings-btn" onClick={handleClick}>
                    Settings
                </button>
                <SettingsModal isOpen={settingsModalIsOpen} toggle={toggleSettingsModal} />
            </div>
        </div>
    );
};

export default Header;
