import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import NavBar from "./components/NavBar";

const theme = createMuiTheme({
  
})


function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
      </Router>
    </ThemeProvider>
  );
}

export default App;
