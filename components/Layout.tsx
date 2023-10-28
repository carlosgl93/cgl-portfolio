// React & dependencies
import { Box } from "@mui/material";
import { FC } from "react";
import ResponsiveAppBar from "./AppBar";
import NewTop from "./NewTop";


interface Props {
  children: JSX.Element;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <Box>
      {/* <ResponsiveAppBar /> */}
      <NewTop/>
      {children}
    </Box>
  );
};
export default Layout;
