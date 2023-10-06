import { createContext } from "react";


export const AllContext = createContext(null)

const ContextProvider = ({children}) => {


    const info = {
        
    }

    return (
        <AllContext.Provider value={info} >
            {children}
        </AllContext.Provider>
    );
};

export default ContextProvider;