import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import NavBar from "./components/NavBar";
import MyCarousel from "./components/MyCarousel";
import "bootstrap/dist/css/bootstrap.css";
import Featured from "./components/Featured_dishes"
import Instant_order from "./components/Instant_order"

const theme = createMuiTheme({
  
})


function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <MyCarousel />
        <Featured />
        <Instant_order />
      </Router>
    </ThemeProvider>
  );
}

export default App;
