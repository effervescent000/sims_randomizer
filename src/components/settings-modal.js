import React, { useContext } from "react";
import { Modal } from "reactstrap";
import Cookies from "js-cookie";
import { Formik, Form } from "formik";

import Checkbox from "./form-components/checkbox";

import { SettingsContext } from "../settings-context";

const SettingsModal = ({ isOpen, toggle }) => {
    const { settings, setSettings } = useContext(SettingsContext);

    const processSettings = (values) => {
        Cookies.set("settings", JSON.stringify(values), { sameSite: "strict" });
        setSettings(values);
    };

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <Formik
                initialValues={{
                    ambitions: "ambitions" in settings ? settings.ambitions : true,
                    cityLiving: "cityLiving" in settings ? settings.cityLiving : true,
                    cottageLiving: "cottageLiving" in settings ? settings.cottageLiving : true,
                    discoverUniversity:
                        "discoverUniversity" in settings ? settings.discoverUniversity : true,
                    getTogether: "getTogether" in settings ? settings.getTogether : true,
                    vampires: "vampires" in settings ? settings.vampires : true,
                }}
                onSubmit={(values) => {
                    processSettings(values);
                }}
                enableReinitialize
            >
                <Form>
                    <div className="game-options-wrapper">
                        <h2>Sims 3</h2>
                        <Checkbox label="Ambitions" name="ambitions" />
                    </div>
                    <div className="game-options-wrapper">
                        <h2>Sims 4</h2>
                        <Checkbox label="Get Together" name="getTogether" />
                        <Checkbox label="City Living" name="cityLiving" />
                        <Checkbox label="Cottage Living" name="cottageLiving" />
                        <Checkbox label="Vampires" name="vampires" />
                        <Checkbox label="Discover University" name="discoverUniversity" />
                    </div>

                    <button type="submit">Save</button>
                </Form>
            </Formik>
        </Modal>
    );
};

export default SettingsModal;
