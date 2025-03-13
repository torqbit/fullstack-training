type formType={
  firstname:string,
  lastname:string ,
  contact: number,
  img: string,
  name: string,
  description : string 
}
export const initialState:formType={
  firstname:"BELLA",
  lastname:"DOE",
  contact: 9857263235,
  img: "images/uifaces-popular-image.jpg",
  name: "Bella",
  description : "I help Startsups through fast-paced full stack software development"
}
export type FormAction = INPUT_CHANGE | RESET_FORM;

type INPUT_CHANGE = {
    type: "INPUT_CHANGE";
    payload: string;
}
type RESET_FORM = {
    type: "RESET_FORM";
}

export const formReducer = (state: formType, action: FormAction):formType => {
    switch (action.type) {
      case "INPUT_CHANGE":
        return {
          ...state,
          name: action.payload
          
        };
      case "RESET_FORM":
        return initialState;
      
       default:
        return state;
    }
  };
