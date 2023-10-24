import { createContext, useState } from "react";

export let CounterContext = createContext();
function CounterContextProvider({children}){
    const [counter,setCounter] = useState(80)
    return <CounterContext.Provider value={counter}>{children}</CounterContext.Provider>
}

export default CounterContextProvider;