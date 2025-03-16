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
  payload:ArticleProps;
}
export const formReducer = (state: AppState, action: FormAction):AppState => {
    switch (action.type) {
      case "INPUT_CHANGE":
        return {
          ...state,
          ...action.payload
        };
      case "RESET_FORM":
        return appInitialState;
      
      case "SAVE_ARTICLE":
        return{
          ...state,
          articles:[...state.articles, action.payload]
        }
      
       default:
        return state;
    }
  };
