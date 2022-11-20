import React, { FC, PropsWithChildren, useReducer } from "react";
import { StateContext } from "./StateContext";
import { StateReducer } from "./stateReducer";

export interface State {
  language: string;
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

const STATE_INITIAL_STATE: State = {
  language: "en",
};

const StateProvider: FC<PropsWithChildren<Props>> = ({ children }) => {
  const [state, dispatch] = useReducer(StateReducer, STATE_INITIAL_STATE);

  const changeLanguage = (lang: string) => {
    dispatch({
      type: "State - Change Language",
      payload: lang,
    });
  };

  return (
    <StateContext.Provider
      value={{
        ...state,

        // methods
        changeLanguage,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
