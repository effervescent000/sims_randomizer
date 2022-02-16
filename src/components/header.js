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
                            <NavLink href="/">Sims 4</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/ts3">Sims 3</NavLink>
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
