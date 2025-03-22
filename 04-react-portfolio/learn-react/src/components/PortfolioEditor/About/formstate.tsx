import { AboutProps } from "./aboutform";
import { appInitialState, AppState } from "@/components/useContext/appContext";
import { ArticleProps } from "../Articles/Article";

type formType = {
   about: AboutProps;
   articleIndex: number;
   articles: ArticleProps[]
}

export type FormAction = INPUT_CHANGE | RESET_FORM | SAVE_ARTICLE | NEW_ARTICLE;

type INPUT_CHANGE = {
    type: "INPUT_CHANGE";
    payload: AboutProps;
}
type RESET_FORM = {
    type: "RESET_FORM";
}
type SAVE_ARTICLE = {
  type:"SAVE_ARTICLE";
  payload:{article:ArticleProps, index:number};
}

type NEW_ARTICLE = {
  type: "NEW_ARTICLE";
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
      
      case "NEW_ARTICLE":
        return {
          ...state,
          articleIndex: 0,
          articles : [...state.articles, {
            title: "", 
            blogImg: "",
            dateOfPublish:"",
            category: "",
            description: "",
            articleLink: "",

          }]
        }
      
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
