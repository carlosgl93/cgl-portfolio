import { createContext } from "react";

interface ContextProps {
  language: string;
  changeLanguage: (lang: string) => void;

  //   methods
}
export const StateContext = createContext({} as ContextProps);
