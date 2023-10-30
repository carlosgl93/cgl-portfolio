'use-client';
import { Box } from '@mui/material';

const TableauViz = ({ workbookUrl }) => {
  return (
    <Box>
      <tableau-viz id='tableauViz' src={workbookUrl} device='phone' toolbar='bottom' hide-tabs></tableau-viz>
    </Box>
  );
};
export default TableauViz;
