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
          display: 'flex',
          justifyContent: 'center',
          mt: '5vh',
          mx: '3vw',
          height: '400px',
          width: '337px',
        }}
      >
        {/* Image left */}

        <Image
          alt='Profile Picture'
          src='/images/foto-perfil-cgl.jfif'
          width={400}
          height={337}
          style={{
            borderRadius: '10px',
          }}
        />
      </Grid>
      <Grid
        item
        sx={{
          px: '5vw',
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
