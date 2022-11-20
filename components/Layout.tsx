// React & dependencies
import { Box } from "@mui/material";
import { FC } from "react";
import ResponsiveAppBar from "./AppBar";

// Material Components

// My components

// Queries & Mutations

// Typescript
interface Props {
  children: JSX.Element;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <Box>
      <ResponsiveAppBar />
      {children}
    </Box>
  );
};
export default Layout;
