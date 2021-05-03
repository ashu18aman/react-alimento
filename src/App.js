import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import NavBar from "./components/NavBar";
import MyCarousel from "./components/MyCarousel";
import "bootstrap/dist/css/bootstrap.css";
import Featured from "./components/FeaturedDishes"
import InstantOrder from "./components/InstantOrder"
import Footer from "./components/Footer"

const theme = createMuiTheme({
  
})


function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <MyCarousel />
        <Featured />
        <InstantOrder />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
