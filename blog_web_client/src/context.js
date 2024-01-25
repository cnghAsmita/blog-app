import { createContext } from "react";

export const AppContext = createContext({
    store: {},
    setStore: ()=>{}
});
