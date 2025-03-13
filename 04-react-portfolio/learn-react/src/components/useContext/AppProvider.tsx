import { FC, ReactElement, useState , useReducer} from "react"
import { AppContext } from "./appContext"
import { portfolio } from "@/site"
import { Aboutform} from "../PortfolioEditor/About/aboutform"
import { initialState, formReducer, FormAction } from "../PortfolioEditor/About/formstate"


const AppProvider: FC<{children: ReactElement}>=({children})=>{

    
    const [state, dispatch] = useReducer(formReducer, initialState)
    
    
    return <AppContext.Provider value={{state: state, dispatch: dispatch}}>
            {children}
           </AppContext.Provider>
}

export default AppProvider;