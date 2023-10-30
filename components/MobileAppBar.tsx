'use client';
import React, { useContext, useState } from 'react';
import { Box, Link, Typography } from '@mui/material';
import LanguageSelector from './LanguageSelector';
import translate from '../utils/translation';
import { StateContext } from '../context/StateContext';
import rebond from '../styles/fonts/font';

const green = '#8AAA79';
const red = '#3E030E';
const lightGreen = '#BECFB4';

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
      <Box
        sx={
          menuOpened
            ? {
                display: 'grid',
                alignItems: 'start',
                gridTemplateAreas: `
                  "name button"
                  "menuBody"
                  "footer"
                `,
                gridTemplateRows: '10% 80% 10%',
                gridTemplateColumns: '33% 33% 33%',
                transition: 'padding 0.8s, width 0.8s, height 0.8s, gridTemplateRows 0.8s, grid-template-rows 0.8s',
                borderRadius: '33px',
                width: { xs: '88.5vw', md: '33vw' },
                height: { xs: '90vh' },
                backgroundColor: red,
                padding: '0.5rem 0.33rem',
              }
            : {
                display: 'grid',
                alignItems: 'start',
                gridTemplateAreas: `
                    "name button language"
                  `,
                gridTemplateRows: '36px 0%',
                gridTemplateColumns: '33% 33% 33%',
                justifyItems: 'center',
                backgroundColor: green,
                color: '#8C7284',
                borderRadius: '33px',
                width: { xs: '160px' },
                height: { xs: '42px' },
                transition: 'padding 0.8s, width 1.6s, height 0.8s, gridTemplateRows 0.8s, grid-template-rows 0.8s',
                transitionTimingFunction: 'ease',
                padding: '0.5rem 0.33rem',
              }
        }
      >
        <Typography
          variant='h1'
          sx={
            menuOpened
              ? {
                  pt: '0.5rem',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: 'white',
                  gridArea: 'name',
                  pl: { xs: '2rem' },
                  transition: 'width 0.8s',
                  gridColumn: '1/1',
                  gridRow: '1/1',
                  ...rebond.style,
                }
              : {
                  pt: '0.5rem',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#3E030E',
                  gridArea: 'name',
                  pl: { xs: '2rem' },
                  transition: 'width 0.8s',
                  gridColumn: '1/1',
                  ...rebond.style,
                }
          }
        >
          Carlos
        </Typography>
        <button
          onClick={() => setMenuOpened(!menuOpened)}
          style={
            menuOpened
              ? {
                  gridArea: 'button',
                  gridRow: '1/1',
                  color: 'white',
                  backgroundColor: green,
                  gridColumn: '3/4',
                  marginRight: '0.5rem',
                  transition: 'grid-column 0.8s, gridColumn 0.8s',
                  transitionDuration: '0.8s',
                  transitionTimingFunction: 'ease',
                  height: '36px',
                  borderRadius: '33px',
                  border: 0,
                  fontWeight: 'bold',
                  ...rebond.style,
                }
              : {
                  gridArea: 'button',
                  color: 'white',
                  backgroundColor: red,
                  gridColumn: '3/4',
                  transition: 'grid-column 0.8s, gridColumn 0.8s',
                  transitionDuration: '0.8s',
                  transitionTimingFunction: 'ease-out',
                  padding: '0.33rem 1rem',
                  height: '36px',
                  borderRadius: '33px',
                  border: 0,
                  marginRight: '2rem',
                  fontWeight: 'bold',
                  ...rebond.style,
                }
          }
        >
          Menu
        </button>
        <Box
          sx={
            menuOpened
              ? {
                  opacity: 0,
                  gridArea: 'language',
                  gridColumn: '3/4',
                  transition: 'width 0.8s, opacity 2s',
                  ...rebond.style,
                }
              : {
                  position: 'absolute',
                  top: '1rem',
                  right: { xs: '10%', md: '5%' },
                  opacity: 1,
                  gridArea: 'language',
                  gridRow: '1/1',
                  gridColumn: '3/4',
                  transition: 'width 0.8s, opacity 4s',
                  ...rebond.style,
                }
          }
        >
          <LanguageSelector />
        </Box>
        <nav
          style={
            menuOpened
              ? {
                  opacity: 1,
                  gridArea: 'menuBody',
                  gridColumn: '1/5',
                  gridRow: '2/5',
                  transition: 'opacity 1.6s',
                  marginLeft: '1rem',
                  marginRight: '1rem',
                }
              : {
                  opacity: 0,
                  gridArea: 'menuBody',
                  gridColumn: '1/5',
                  gridRow: '2/5',
                  height: 0,
                }
          }
        >
          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              listStyle: 'none',
              padding: '1rem',
              ...rebond.style,
            }}
          >
            {pages.map((p) => (
              <React.Fragment key={p.title + p.link}>
                <Link
                  style={{
                    textDecoration: 'none',
                    color: lightGreen,
                    fontWeight: 'bolder',
                    fontSize: '1.875rem',
                    lineHeight: '1.06',
                    ...rebond.style,
                  }}
                  href={p.link}
                >
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
                      <Link
                        key={c.link}
                        style={{
                          textDecoration: 'none',
                          color: green,
                          fontWeight: 'bolder',
                          ...rebond.style,
                          fontSize: '1.25rem',
                        }}
                        href={`/data-visualization/${c.link}`}
                      >
                        {c.title}
                      </Link>
                    ))}
                  </ul>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
        <footer
          style={
            menuOpened
              ? {
                  padding: ' 0rem 2rem',
                  gridRow: '3/4',
                  gridColumn: '1/5',
                  fontSize: '.75rem',
                  lineHeight: '1.3333333333333333',
                  color: 'white',
                  ...rebond.style,
                }
              : {
                  display: 'none',
                  gridRow: 0,
                  gridColumn: 0,
                  ...rebond.style,
                }
          }
        >
          <hr />
          <p>{date} @ Carlos G. L</p>
        </footer>
      </Box>
    </Box>
  );
};

export default MobileAppBar;
