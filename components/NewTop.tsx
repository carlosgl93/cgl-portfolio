'use client';
import {
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import LanguageSelector from './LanguageSelector';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ConstructionIcon from '@mui/icons-material/Construction';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Person4Icon from '@mui/icons-material/Person4';
import MenuIcon from '@mui/icons-material/Menu';

type Route = {
  label: string;
  icon?: React.ReactElement;
  link: string;
};

const pages: Route[] = [
  {
    label: 'About Me',
    icon: <Person4Icon />,
    link: '/',
  },
  {
    label: 'Projects',
    icon: <BusinessCenterIcon />,
    link: '/projects',
  },
  {
    label: 'Playground',
    icon: <ConstructionIcon />,
    link: '/under-construction',
  },
  {
    label: 'Contact',
    icon: <ContactMailIcon />,
    link: '/contact',
  },
];

const NewTop = () => {
  const [menuHovered, setMenuHovered] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

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
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        m: '1rem',
      }}
    >
      <Box
        sx={
          menuOpened
            ? {
                display: 'grid',
                paddingTop: '10px',
                gridTemplateAreas: `
                  "name button"
                  "menubody menubody"
                `,
                gridTemplateRows: '36px 90%',
                gridTemplateColumns: '25% 25%',
                justifyItems: 'center',
                marginLeft: { xs: '16px', md: '3vw' },
                transition: 'width 0.8s, height 0.8s, gridTemplateRows 0.8s, grid-template-rows 0.8s',
                borderRadius: '33px',
                width: { xs: '84vw', md: '10vw' },
                height: { xs: '90vh' },
                backgroundColor: '#3E030E',
              }
            : {
                display: 'grid',
                paddingTop: '10px',
                gridTemplateAreas: `
                    "name button  language"
                  `,
                gridTemplateRows: '36px 0%',
                gridTemplateColumns: '25% 25% 25% 25%',
                justifyItems: 'center',
                backgroundColor: '#8AAA79',
                color: '#8C7284',
                borderRadius: '33px',
                width: { xs: '160px', md: '10vw' },
                height: { xs: '36px' },
                transition: 'width 1.6s, height 0.8s, gridTemplateRows 0.8s, grid-template-rows 0.8s',
                transitionTimingFunction: 'ease',
                alignItems: 'start',
                marginLeft: { xs: '16px', md: '3vw' },
              }
        }
      >
        <Typography
          variant='h1'
          sx={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: menuOpened ? 'white' : '#3E030E',
            gridArea: 'name',
            pl: { xs: '2rem' },
          }}
        >
          Carlos
        </Typography>
        <Button
          variant='outlined'
          onClick={() => setMenuOpened(!menuOpened)}
          onMouseEnter={() => setMenuHovered(!menuHovered)}
          sx={
            menuOpened
              ? {
                  gridArea: 'button',
                  backgroundColor: 'white',
                  transitionDuration: '0.8s',
                  transitionTimingFunction: 'ease',
                  color: '#3E030E',
                  gridColumn: '3/5',
                  borderColor: '#3E030E',
                  borderWidth: '1px',
                  maxWidth: '20vw',
                }
              : {
                  gridArea: 'button',
                  transitionDuration: '0.8s',
                  transitionTimingFunction: 'ease-out',
                  color: '#3E030E',
                  backgroundColor: 'white',
                  gridColumn: '3/5',
                  borderColor: 'white',
                  borderWidth: '1px',
                  width: '1rem',
                  padding: { xs: '18px 8px' },
                  maxWidth: '20vw',
                  border: '1px white',
                }
          }
          onMouseLeave={() => setMenuHovered(!menuHovered)}
        >
          Menu
        </Button>
        <Box
          sx={
            menuOpened
              ? {
                  // display: 'none',
                  gridArea: 'language',
                  gridRow: '2/2',
                  opacity: 0,
                  transition: 'width 0.8s, opacity 1s',
                }
              : {
                  position: 'absolute',
                  top: '1rem',
                  right: '10%',
                  opacity: 1,
                  gridArea: 'language',
                  gridRow: '1/1',
                  gridColumn: '4/5',
                  transition: 'width 0.8s, opacity 1s',
                }
          }
        >
          <LanguageSelector />
        </Box>
        <Box
          style={
            menuOpened
              ? {
                  opacity: 1,
                  gridArea: 'menuBody',
                  gridColumn: '1/5',
                  gridRow: '2/3',
                  transition: 'opacity 1.6s',
                }
              : {
                  opacity: 0,
                  gridArea: 'menuBody',
                  gridColumn: '1/5',
                  gridRow: '2/3',
                  height: 0,
                }
          }
        >
          <Typography variant='h6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolores voluptas, pariatur laudantium culpa
            earum enim dolorum cupiditate ipsam et quibusdam rerum aperiam neque nesciunt eos ab est incidunt optio.
          </Typography>
        </Box>
        {/* </Box> */}
      </Box>

      <Drawer
        anchor='bottom'
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block' },
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
  );
};

export default NewTop;
