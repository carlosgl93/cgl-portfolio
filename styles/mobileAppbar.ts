import { green, red, lightGreen } from './colors';
import rebond from '../styles/fonts/font';

export const openedParentBox = {
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
};

export const closedParentBox = {
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
  padding: { xs: '0.5rem 0.33rem' },
};

export const openedName = {
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
};

export const closedName = {
  pt: '0.5rem',
  fontSize: '1.25rem',
  fontWeight: 'bold',
  color: '#3E030E',
  gridArea: 'name',
  pl: { xs: '2rem' },
  transition: 'width 0.8s',
  gridColumn: '1/1',
  ...rebond.style,
};

export const openedMenuButton = {
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
};

export const closedMenuButton = {
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
};

export const openedLanguage = {
  opacity: 0,
  gridArea: 'language',
  gridRow: '0',
  gridColumn: '3/4',
  transition: 'width 0.8s, opacity 0s',
  ...rebond.style,
};

export const closedLanguage = {
  position: 'absolute',
  top: '1rem',
  right: { xs: '5%', md: '2%' },
  opacity: 1,
  gridArea: 'language',
  gridRow: '1/1',
  gridColumn: '3/4',
  transition: 'width 0.8s, opacity 3s',
  ...rebond.style,
};

export const openedNav = {
  opacity: 1,
  gridArea: 'menuBody',
  gridColumn: '1/5',
  gridRow: '2/5',
  transition: 'opacity 1.6s',
  marginLeft: '1rem',
  marginRight: '1rem',
};

export const closedNav = {
  opacity: 0,
  gridArea: 'menuBody',
  gridColumn: 0,
  gridRow: 0,
  height: 0,
};

export const parentUl = {
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  padding: '1rem',
  ...rebond.style,
};

export const parentLink = {
  textDecoration: 'none',
  color: lightGreen,
  fontWeight: 'bolder',
  fontSize: '1.875rem',
  lineHeight: '1.06',
  ...rebond.style,
};

export const childrenLink = {
  textDecoration: 'none',
  color: green,
  fontWeight: 'bolder',
  ...rebond.style,
  fontSize: '1.25rem',
};

export const openedFooter = {
  padding: '0rem 2rem',
  gridRow: '3/4',
  gridColumn: '1/5',
  fontSize: '.75rem',
  lineHeight: '1.3333333333333333',
  color: 'white',
  ...rebond.style,
};

export const closedFooter = {
  display: 'none',
  gridRow: 0,
  gridColumn: 0,
  ...rebond.style,
};
