import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Home"
import Feedback from "./components/Feedback"

const theme = createMuiTheme({
  
})


function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' >
            <Home />
          </Route>
          <Route path='/feedback' >
            <Feedback />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
