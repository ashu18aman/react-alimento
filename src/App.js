import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import NavBar from "./components/NavBar";
import MyCarousel from "./components/MyCarousel";
import "bootstrap/dist/css/bootstrap.css";
import Featured from "./components/Featured_dishes"

const theme = createMuiTheme({
  
})


function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <MyCarousel />
        <Featured />
      </Router>
    </ThemeProvider>
  );
}

export default App;
