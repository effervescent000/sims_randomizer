import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SettingsContext } from "../settings-context";
import SettingsModal from "./settings-modal";

const customRender = (ui, { providerProps, ...renderOptions }) => {
    return render(
        <SettingsContext.Provider {...providerProps}>{ui}</SettingsContext.Provider>,
        renderOptions
    );
};

describe("Testing settings modal", () => {
    test("Testing settings loading", () => {
        const providerProps = {
            value: {
                settings: {
                    ambitions: true,
                    discoverUniversity: false,
                    getToWork: false,
                },
                setSettings: jest.fn(),
            },
        };
        const toggle = jest.fn();
        customRender(<SettingsModal isOpen={true} toggle={toggle} />, { providerProps });
        expect(screen.getByLabelText("Ambitions")).toBeChecked();
        expect(screen.getByLabelText("Discover University")).not.toBeChecked();
        expect(screen.getByLabelText("Cottage Living")).toBeChecked();
    });
});
