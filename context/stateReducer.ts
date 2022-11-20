import { State } from "./StateProvider";

type StateActionType = {
  type: "State - Change Language";
  payload: string;
};

export const StateReducer = (state: State, action: StateActionType): State => {
  switch (action.type) {
    case "State - Change Language":
      return { ...state, language: action.payload };
    default:
      return state;
  }
};
