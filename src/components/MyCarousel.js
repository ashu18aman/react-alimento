import Carousel from "react-bootstrap/Carousel";
import img1 from "./Images/restaurant-view.jpg";
import img2 from "./Images/snacks.jpg";
import img3 from "./Images/thali.jpg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => {
  return {
    root: {
      marginTop: '64px',
      [theme.breakpoints.down('md')]: {
        height: '90vh',
      },
      [theme.breakpoints.down('sm')]: {
        height: '70vh',
      },
    },
    item:{
      [theme.breakpoints.down('md')]: {
        height: '90vh',
      },
      [theme.breakpoints.down('sm')]: {
        height: '70vh',
      },
    },
  };
});


const MyCarousel = () => {

  const classes = useStyles();

  return (
    <div>
      <Carousel interval={3000} fade={true} controls={false} className={classes.root}>
        <Carousel.Item className={classes.item}>
          <img
            className="d-block w-100 silder-image"
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Snacks</h3>
            <p>Buy 2 get 1 free</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={classes.item}>
          <img
            className="d-block w-100 silder-image"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Clean and Hygienic</h3>
            <p>Safety First</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={classes.item}>
          <img
            className="d-block w-100 silder-image"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Thali</h3>
            <p>Both Veg and Non-Veg with good discounts</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
