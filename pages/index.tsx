// React & dependencies
import { FC, useContext } from 'react';
import Image from 'next/image';

// Material Components
import { Box, Grid, Typography } from '@mui/material';

// My components
import useWindowDimensions from '../utils/windowHook';
import translate from '../utils/translation';
import { StateContext } from '../context/StateContext';
// Queries & Mutations

// Typescript
interface Props {}
const Home: FC<Props> = ({}) => {
  const { language } = useContext(StateContext);
  return (
    <Grid container>
      <Grid
        item
        sx={{
          display: 'grid',
          alignItems: 'center',
          alignContent: 'center',
          borderRadius: '22px',
          overflow: 'hidden',
          width: '400px',
          height: '337px',
          mx: '1rem',
        }}
      >
        <Image priority alt='My Profile Picture' src='/images/foto-perfil-cgl.jfif' height={337} width={400} />
      </Grid>
      <Grid
        item
        sx={{
          mx: '1rem',
        }}
      >
        {/* Description right */}
        <Typography variant='subtitle1'>{translate(0, language)}</Typography>
        <Typography variant='h4'>Carlos Gumucio Labbé</Typography>
        <Typography variant='h6'>Full Stack Developer</Typography>
      </Grid>
    </Grid>
  );
};
export default Home;
