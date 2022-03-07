import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import useStyles from '../utils/styles';

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography variant="h3">Shop Online</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>
          Next Shop of Great Ideas. All rights reserved &copy; Adrian Hansa 2022
        </Typography>
      </footer>
    </div>
  );
};

export default Layout;
