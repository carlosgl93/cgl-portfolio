"use client"
import { Avatar, Box, Button, Drawer, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'
import LanguageSelector from './LanguageSelector'
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ConstructionIcon from "@mui/icons-material/Construction";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Person4Icon from "@mui/icons-material/Person4";
import MenuIcon from "@mui/icons-material/Menu";

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

const NewTop = () => {
  const [menuHovered, setMenuHovered] = useState(false)
  const [menuOpened, setMenuOpened] = useState(false)
  
   const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          m: '1rem'
        }}
      >
        <Box sx={menuOpened ? {
          display: 'grid',
          gridTemplateAreas: `
          "name button"
          "menubody menubody"
        `,
          gridTemplateRows: '10% 80%',
        gridTemplateColumns: '50% 50%',
          justifyItems: 'center',
          marginLeft: { xs: '16px', md: '3vw' },
          transition: 'width 0.8s, height 0.8s',
          transitionTimingFunction: 'ease',
          borderRadius: '33px',
          width: { 'xs': '84vw', md: '10vw' },
          height: { 'xs': '90vh', },
          backgroundColor: '#3E030E',
        } : {
          display: 'grid',
        gridTemplateAreas: `
          "name button"
        `,
        gridTemplateRows: '10% 80%',
          gridTemplateColumns: '50% 50%',
          justifyItems: 'center',
          backgroundColor: '#8AAA79',
          color: "#8C7284",
          borderRadius: '33px',
          width: { 'xs': '148px', md: '10vw' },
          height: { 'xs': '36px', },
          pl: {xs: '10px'},
          transitionDuration: '1.6s',
          transitionTimingFunction: 'ease',
        }}
        >
          {/* <Box
            sx={
              menuOpened? {
              display: 'grid',
              gridTemplateAreas: `
                "name button"
                "menuBody menuBody"
                "menuBody menuBody"
                `
                ,
                p: '2rem 1rem',
                
              } : {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: '1rem',
                alignItems: 'center'
              }
            }
          > */}
            <Typography variant='h1' sx={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: menuOpened ? 'white' : '#3E030E',
            gridArea: 'name'
          }}>
            Carlos
          </Typography>
          <Button variant="outlined" onClick={() => setMenuOpened(!menuOpened)} onMouseEnter={() => setMenuHovered(!menuHovered)} style={
            menuOpened ? {
              backgroundColor: 'white',
              transitionDuration: '0.8s',
              transitionTimingFunction: 'ease',
              color: '#3E030E',
              gridArea: 'button',
              borderColor: '#3E030E',
              borderWidth: '1px'
            } : {
              transitionDuration: '0.8s',
              transitionTimingFunction: 'ease-out',
              backgroundColor: '#3E030E',
              color: 'white',
              gridArea: 'button',
              borderColor: 'white',
              borderWidth: '1px'
              
              }
          }
          onMouseLeave={() => setMenuHovered(!menuHovered)}
            sx={{
              maxHeight: '20px',
              maxWidth: '20vw'
            }}
          >
            Menu
            </Button>
          <Box style={menuOpened ? {
            visibility: 'visible',
          gridArea: 'menuBody',
          gridColumn: '1/3',
            gridRow: '2/3'
            // transition: 'visible 1s height 0s',
            // transitionDuration: '0.8s',
            //   transitionTimingFunction: 'ease',
          } : {
            visibility: 'hidden',
            gridArea: 'menuBody',
            gridColumn: '1/3',
            gridRow: '2/3'
            
            //   transition: 'visible 1s height 0s',
            // transitionDuration: '0.8s',
            //   transitionTimingFunction: 'ease',
          }}

          >
            <Typography variant='h6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolores voluptas, pariatur laudantium culpa earum enim dolorum cupiditate ipsam et quibusdam rerum aperiam neque nesciunt eos ab est incidunt optio.
            </Typography>
          </Box>
          {/* </Box> */}
        </Box>
            <LanguageSelector show={menuOpened} />
            <Drawer
              anchor='bottom'
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block" },
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
  )
}

export default NewTop