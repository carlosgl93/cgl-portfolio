// React & dependencies
import { FC } from "react";

import { Typography } from '@mui/material';
import TableauViz from '../components/TableauViz';



// Typescript
interface Props {}
const DataVisualization: FC<Props> = ({}) => {
  return (
    <>
      <Typography variant='h5'>Tableau</Typography>
      <TableauViz workbookUrl='https://public.tableau.com/views/Superstore_24/Overview'></TableauViz>
    </>
  );
};
export default DataVisualization;
