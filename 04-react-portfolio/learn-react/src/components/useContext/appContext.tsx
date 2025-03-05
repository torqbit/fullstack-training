import { ArticleProps } from "@/pages/components/Articles/Article";
import { ProjectProps} from "@/pages/components/Projects/Project";
import { TalkProps } from "@/pages/components/Talks/Talk";
import { createContext } from "react";

type AppContextType ={
    name:string | null,
    contact: number | null,
    profileImg: string | null,
    title: string | null,
    description : string | null,
    article: ArticleProps[],
    project: ProjectProps[],
    talk : TalkProps[];
}
 export const AppContext = createContext<AppContextType>({contact: null, name: null, profileImg: null, title:null, description:null, article: [], project:[], talk:[]})