import { FC, ReactElement, useState , useReducer} from "react"
import { AppContext } from "./appContext"
import { formReducer, FormAction } from "../PortfolioEditor/About/formstate"
import { appInitialState } from "./appContext"


const AppProvider: FC<{children: ReactElement}>=({children})=>{

    
    const [state, dispatch] = useReducer(formReducer, appInitialState) 
    
    return <AppContext.Provider value={{ state: state, dispatch: dispatch}}>
            {children}
           </AppContext.Provider>
}

export default AppProvider;