import React from "react";
import Container from "@material-ui/core/Container";
import {
  makeStyles,
  Theme,
  createStyles,
  AppBar,
  Typography,
  Toolbar,
  Link,
  Button,
} from "@material-ui/core";

import {
  Router,
  Switch,
  Route,
  Link as RouterLink
} from "react-router-dom";

import { createBrowserHistory } from 'history';


import ReactGA from 'react-ga';
import CookieConsent, { Cookies } from "react-cookie-consent";

import HiveList from "./components/HiveList";
import HiveDetail from "./components/HiveDetail";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
    container: {
      marginTop: theme.spacing(1),
    },
  })
);

const history = createBrowserHistory();



function App() {
  const classes = useStyles();

  return (
    <Router history={history}>
     
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link color="inherit" component={RouterLink} to="/">
              {process.env.REACT_APP_APIARY_NAME ?? "Apiary"}
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.container}>
        <Switch>
          <Route exact path="/">
            <HiveList />
          </Route>
          <Route path="/hive/:hiveSlug" children={<HiveDetail />} />
          <Route>
            <Typography variant="h2" gutterBottom>
              Page not found
            </Typography>
            <Typography variant="body1">
              There doesn't seem to bee anything here <span role="img" aria-label="bee">🐝</span>
            </Typography>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
