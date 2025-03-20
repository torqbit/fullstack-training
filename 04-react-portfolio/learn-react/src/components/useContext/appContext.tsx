import { createContext } from "react";
import { AboutProps } from "../PortfolioEditor/About/aboutform";
import {  FormAction } from "../PortfolioEditor/About/formstate";
import { aboutInitialState } from "../PortfolioEditor/About/aboutform";
import { ArticleProps } from "../PortfolioEditor/Articles/Article";

export type AppState = {
    about: AboutProps;
    articleIndex: number;
    articles: ArticleProps[]
}
type FormContextType ={
    state: AppState,
    dispatch: React.Dispatch<FormAction>
}

export const appInitialState: AppState = {
    about: aboutInitialState,
    articleIndex: 0,
    articles: []
}


 export const AppContext = createContext<FormContextType>({state: appInitialState, dispatch:()=>{}})