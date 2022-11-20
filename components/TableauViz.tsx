"use-client";
import { Box } from "@mui/material";
// React & dependencies
import { FC } from "react";

// Material Components

// My components

// Queries & Mutations

// Typescript
interface Props {
  workbookUrl: string;
}
const TableauViz: FC<Props> = ({ workbookUrl }) => {
  return (
    <Box>
      <tableau-viz
        id='tableauViz'
        src={workbookUrl}
        device='phone'
        toolbar='bottom'
        hide-tabs
      ></tableau-viz>
    </Box>
  );
};
export default TableauViz;
