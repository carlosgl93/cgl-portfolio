"use-client";
// React & dependencies

import React, { FC, useContext } from 'react';

// Material Components
import { SelectChangeEvent, Select, MenuItem } from '@mui/material';
import { StateContext } from '../context/StateContext';
import { red } from '../styles/colors';

interface Props {
  show?: Boolean;
}

const languageOptions = [
  {
    label: 'English',
    value: 'English',
  },
  {
    label: 'Español',
    value: 'Español',
  },
];

const LanguageSelector: FC<Props> = ({ show }) => {
  const { changeLanguage, language } = useContext(StateContext);

  const handleChange = (event: SelectChangeEvent<string>) => {
    changeLanguage(event.target.value as string);
  };

  return (
    <Select
      value={language}
      onChange={handleChange}
      sx={{
        borderRadius: '33px',
        backgroundColor: red,
        color: 'white',
      }}
    >
      {languageOptions.map((option) => (
        <MenuItem
          sx={{
            borderRadius: '33px',
            // backgroundColor: red,
            // color: 'white',
          }}
          selected={option.value === language}
          dense
          key={option.value}
          value={option.value}
        >
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};
export default LanguageSelector;
