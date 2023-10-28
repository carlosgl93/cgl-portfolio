"use client";
import * as React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ConstructionIcon from "@mui/icons-material/Construction";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Person4Icon from "@mui/icons-material/Person4";

import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIconTypeMap,
} from "@mui/material";
import LanguageSelector from "./LanguageSelector";

type Route = {
  label: string;
  icon?: React.ReactElement;
  link: string;
};

const pages: Route[] = [
  {
    label: "About Me",
    icon: <Person4Icon />,
    link: "/",
  },
  {
    label: "Projects",
    icon: <BusinessCenterIcon />,
    link: "/projects",
  },
  {
    label: "Playground",
    icon: <ConstructionIcon />,
    link: "/under-construction",
  },
  {
    label: "Contact",
    icon: <ContactMailIcon />,
    link: "/contact",
  },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position='static' id="appbar">
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Avatar
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            alt='Full Stack Dev'
            src='/images/fullstack-icon.png'
          />

          {/* mobile nav */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <LanguageSelector />
            <Drawer
              anchor='bottom'
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <List>
                {pages.map((route, index) => (
                  <ListItem key={route.link} disablePadding>
                    <Link href={route.link}>
                      <ListItemButton>
                        <ListItemIcon>{route.icon}</ListItemIcon>
                        <ListItemText primary={route.label} />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Box>

          {/* desktop nav */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((route) => (
              <Button
                key={route.link}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {route.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
