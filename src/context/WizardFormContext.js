import { createContext, useContext, useState } from "react";

export const WizardFormContext = createContext();

export function WizardFormProvider({ children }) {
    const value = useState({});
    return (
        <WizardFormContext.Provider value={value}>
            {children}
        </WizardFormContext.Provider>
    );
}

export function useWizardFormState() {
    const context = useContext(WizardFormContext);
    if (!context) {
        throw new Error("useAppState must be used within the WizardFormProvider");
    }
    return context;
}
