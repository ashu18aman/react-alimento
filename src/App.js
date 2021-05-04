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
        <Route exact path='/' component={Home} />
        <Route path='/feedback' component={Feedback} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
