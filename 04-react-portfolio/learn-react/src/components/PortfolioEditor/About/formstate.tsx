import { AboutProps } from "./aboutform";
import { appInitialState, AppState } from "@/components/useContext/appContext";
import { ArticleProps } from "../Articles/Article";

type formType={
   about: AboutProps;
   articles: ArticleProps[]
}

export type FormAction = INPUT_CHANGE | RESET_FORM | SAVE_ARTICLE;

type INPUT_CHANGE = {
    type: "INPUT_CHANGE";
    payload: AboutProps;
}
type RESET_FORM = {
    type: "RESET_FORM";
}
type SAVE_ARTICLE={
  type:"SAVE_ARTICLE";
  payload:{article:ArticleProps, index:number};
}
export const formReducer = (state: AppState, action: FormAction):AppState => {
    switch (action.type) {
      case "INPUT_CHANGE":
        return {
          ...state,
          about:{...state.about, ...action.payload}
        };
      case "RESET_FORM":
        return appInitialState;
      
      case "SAVE_ARTICLE":
        const newArticlesArray = [...state.articles]
        newArticlesArray[action.payload.index]= action.payload.article
        return{
          ...state,
          articles:newArticlesArray 
        }
      
       default:
        return state;
    }
  };
