import { useContext } from 'react';
import {
  AppBar,
  Container,
  createTheme,
  ThemeProvider,
  Toolbar,
  Typography,
  Switch,
  CssBaseline,
} from '@mui/material';
import useStyles from '../utils/styles';
import Link from 'next/link';
import Head from 'next/head';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';

const Layout = ({ children, title, description }) => {
  const label = { inputProps: { 'aria-label': 'Theme' } };
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  const classes = useStyles();
  const themeHandler = () => {
    dispatch({
      type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON',
    });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next Shop` : 'Next Shop'}</title>
        {description && <meta name="description" content={description} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <Typography variant="h5" className={classes.brand}>
              <Link href="/">Shop Online </Link>
              <Switch
                {...label}
                checked={darkMode}
                color="primary"
                onChange={themeHandler}
              />
            </Typography>
            <div className={classes.grow}></div>
            <div>
              <Link href="/cart">Cart</Link>
              <Link href="/login">Login</Link>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>
            Next Shop of Great Ideas. All rights reserved &copy; Adrian Hansa
            2022
          </Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
