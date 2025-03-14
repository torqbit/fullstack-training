import { createContext } from "react";
import { AboutProps } from "../PortfolioEditor/About/aboutform";
import { FormAction } from "../PortfolioEditor/About/formstate";
import { initialState } from "../PortfolioEditor/About/formstate";

type FormContextType ={
    state: AboutProps,
    dispatch: React.Dispatch<FormAction>
}
 export const AppContext = createContext<FormContextType>({state: initialState, dispatch:()=>{}})