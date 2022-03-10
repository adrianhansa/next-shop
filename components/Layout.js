import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import useStyles from '../utils/styles';
import Link from 'next/link';

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
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
