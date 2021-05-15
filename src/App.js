import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Home";
import Feedback from "./components/Feedback";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import "../src/index.css";
import Loading from "./components/Loading";
import React, { useState, useEffect } from 'react';
import SignUp__ from "./MyExperiments/SignUp_"

const theme = createMuiTheme({});

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      setLoading(true);
      setTimeout(
        () => {
          setLoading(false);
        }, 8000
      );
    }, []
  );

  return (
    <div >
      {
        loading ?
          <Loading loading={{loading}} />
          :
          <ThemeProvider theme={theme}>
            <Router>
              <NavBar />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/feedback">
                  <Feedback />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/signup">
                  <SignUp />
                </Route>
                <Route path="/menu">
                  <Menu />
                </Route>
                <Route path="/cart">
                  <Cart />
                </Route>
              </Switch>
              <Footer />
            </Router>
          </ThemeProvider>
      }
    </div>
  );
}

export default App;
