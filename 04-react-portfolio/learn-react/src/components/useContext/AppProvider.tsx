import { FC, ReactElement , useReducer} from "react"
import { AppContext, appInitialState } from "./appContext"
import {  formReducer, FormAction } from "../PortfolioEditor/About/formstate"


const AppProvider: FC<{children: ReactElement}>=({children})=>{

    
    const [state, dispatch] = useReducer(formReducer, appInitialState)
    
    
    return <AppContext.Provider value={{state: state, dispatch: dispatch}}>
            {children}
           </AppContext.Provider>
}

export default AppProvider;