import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import useStyles from '../utils/styles';
import Link from 'next/link';
import Head from 'next/head';

const Layout = ({ children, title, description }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next Shop` : 'Next Shop'}</title>
        {description && <meta name="description" content={description} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography variant="h5" className={classes.brand}>
            <Link href="/">Shop Online </Link>
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
          Next Shop of Great Ideas. All rights reserved &copy; Adrian Hansa 2022
        </Typography>
      </footer>
    </div>
  );
};

export default Layout;
