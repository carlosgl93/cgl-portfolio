// React & dependencies
import { Box } from '@mui/material';
import { FC } from 'react';
import MobileAppbar from './MobileAppBar';

interface Props {
  children: JSX.Element;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <Box>
      <MobileAppbar />
      {children}
    </Box>
  );
};
export default Layout;
