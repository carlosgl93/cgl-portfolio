"use-client";
// React & dependencies

import { FC, useContext } from "react";

// Material Components
import {
  SelectChangeEvent,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { StateContext } from "../context/StateContext";
import translate from "../utils/translation";
// My components

// Queries & Mutations

// Typescript
interface Props {}
const LanguageSelector: FC<Props> = ({}) => {
  const { changeLanguage, language } = useContext(StateContext);
  console.log({ language });

  const handleChange = (event: SelectChangeEvent) => {
    changeLanguage(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='language-selector'>{translate(1, language)}</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={language}
          label={language}
          renderValue={() => language}
          onChange={handleChange}
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"es"}>Español</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
export default LanguageSelector;
