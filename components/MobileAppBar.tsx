'use client';
import React, { useContext, useState } from 'react';
import { Box, Link, Typography } from '@mui/material';
import LanguageSelector from './LanguageSelector';
import translate from '../utils/translation';
import { StateContext } from '../context/StateContext';
import rebond from '../styles/fonts/font';
import {
  childrenLink,
  closedFooter,
  closedLanguage,
  closedMenuButton,
  closedName,
  closedNav,
  closedParentBox,
  openedFooter,
  openedLanguage,
  openedMenuButton,
  openedName,
  openedNav,
  openedParentBox,
  parentLink,
} from '../styles/mobileAppbar';

const date = new Date().getFullYear();

const MobileAppBar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const { language } = useContext(StateContext);

  const pages = [
    {
      title: translate(2, language),
      link: '/',
    },
    {
      title: translate(3, language),
      link: '/projects',
    },
    {
      title: translate(4, language),
      link: '/data-visualization',
      children: [
        {
          title: translate(5, language),
          link: '/tableau',
        },
        {
          title: translate(6, language),
          link: '/d3',
        },
      ],
    },
    {
      title: translate(7, language),
      link: '/about-me',
    },
  ];
  return (
    <Box
      sx={{
        m: '1rem',
      }}
    >
      <Box sx={menuOpened ? openedParentBox : closedParentBox}>
        <Typography variant='h1' sx={menuOpened ? openedName : closedName}>
          Carlos
        </Typography>
        <button onClick={() => setMenuOpened(!menuOpened)} style={menuOpened ? openedMenuButton : closedMenuButton}>
          Menu
        </button>
        <Box sx={menuOpened ? openedLanguage : closedLanguage}>
          <LanguageSelector />
        </Box>
        <nav style={menuOpened ? openedNav : closedNav}>
          <ul
            style={
              menuOpened
                ? {
                    display: 'flex',
                    flexDirection: 'column',
                    listStyle: 'none',
                    padding: '1rem',
                    ...rebond.style,
                  }
                : {
                    display: 'none',
                  }
            }
          >
            {pages.map((p) => (
              <React.Fragment key={p.title + p.link}>
                <Link style={parentLink} href={p.link}>
                  {p.title}
                </Link>
                {p?.children && (
                  <ul
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '0.5rem',
                      ...rebond.style,
                      fontWeight: 'lighter',
                    }}
                  >
                    {p.children.map((c) => (
                      <Link key={c.link} style={childrenLink} href={`/data-visualization/${c.link}`}>
                        {c.title}
                      </Link>
                    ))}
                  </ul>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
        <footer style={menuOpened ? openedFooter : closedFooter}>
          <hr />
          <p>{date} @ Carlos G. L</p>
        </footer>
      </Box>
    </Box>
  );
};

export default MobileAppBar;
