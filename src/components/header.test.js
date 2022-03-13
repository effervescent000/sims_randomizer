import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Header from "./header";

describe("Header rendering tests", () => {
    beforeEach(() => {
        render(<Header />);
    });
    test("Test rendering", () => {
        expect(screen.getByText(/Sims Randomizer/)).toBeInTheDocument();
        expect(screen.getByText(/Sims 3/)).toBeInTheDocument();
        expect(screen.getByText(/Sims 4/)).toBeInTheDocument();
        expect(screen.getByText("Settings")).toBeInTheDocument();
    });
    test("Test settings modal button", () => {
        expect(screen.queryByText(/Ambitions/)).toBeNull();
        const settingsButton = screen.getByText("Settings");
        userEvent.click(settingsButton);
        expect(screen.getByText(/Ambitions/)).toBeInTheDocument();
    });
});
