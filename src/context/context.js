import { createContext, useContext, useState } from "react";
const GlobalContext = createContext();
export const AppProvider = ({ children }) => {
    const [state, setState] = useState(false);

    return (
        <GlobalContext.Provider value={{ state, setState }}>
            {children}
        </GlobalContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
