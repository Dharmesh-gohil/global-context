/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useState, createContext, useContext } from "react";


const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext); 

const AppContext = ({ children}) => { 
    const [name, setName] = useState("Angel");
    return<GlobalContext.Provider value={{name, setName}}>
            { children}
        </GlobalContext.Provider>
    
}
export default AppContext