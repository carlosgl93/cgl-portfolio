"use-client";
// React & dependencies

import { FC, useContext } from "react";

// Material Components
import {
  SelectChangeEvent,
  Select,
  MenuItem,
} from "@mui/material";
import { StateContext } from "../context/StateContext";
import translate from "../utils/translation";


interface Props {
  show?: Boolean;
}

const LanguageSelector: FC<Props> = ({show}) => {
  const { changeLanguage, language } = useContext(StateContext);

  const handleChange = (event: SelectChangeEvent) => {
    changeLanguage(event.target.value as string);
  };

  return (
    <Select labelId='language-selector-label' id='language-selector' value={language} onChange={handleChange}>
      <MenuItem value={'English'}>English</MenuItem>
      <MenuItem value={'Español'}>Español</MenuItem>
    </Select>
  );
};
export default LanguageSelector;
