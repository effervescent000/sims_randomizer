import { createContext } from "react";

export const SettingsContext = createContext({
    settings: {},
    setSettings: () => {},
});
