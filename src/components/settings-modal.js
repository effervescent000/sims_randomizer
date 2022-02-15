import React, { useContext, useEffect, useState } from "react";
import { Modal } from "reactstrap";
import Cookies from "js-cookie";
import { Formik, Form, FieldArray } from "formik";

import Checkbox from "./form-components/checkbox";
import { SettingsContext } from "../settings-context";

const SettingsModal = ({ isOpen, toggle }) => {
    const { settings, setSettings } = useContext(SettingsContext);
    const [settingValues, setSettingValues] = useState({});

    useEffect(() => {
        if (Object.keys(settingValues).length > 0) {
            Cookies.set("settings", JSON.stringify(settingValues));
        }
        setSettings(settingValues);
    }, [settingValues]);

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <Formik
                initialValues={{
                    getTogether: settings.getTogether || true,
                    cityLiving: settings.cityLiving || true,
                    vampires: settings.vampires || true,
                    discoverUniversity: settings.discoverUniversity || true,
                }}
                onSubmit={(values) => {
                    setSettingValues(values);
                }}
            >
                <Form>
                    <Checkbox label="Get Together" name="getTogether" />
                    <Checkbox label="City Living" name="cityLiving" />
                    <Checkbox label="Vampires" name="vampires" />
                    <Checkbox label="Discover University" name="discoverUniversity" />
                    <button type="submit">Save</button>
                </Form>
            </Formik>
        </Modal>
    );
};

export default SettingsModal;
