import Carousel from "react-bootstrap/Carousel";
import { makeStyles, } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const testimonial = [
  {
    content:
      `   Over all though it was a great experience and we have had lots of great feedback. We already started promoting our next event and I have been approached by 4 other companies who want .`,
    author: 'Sarah M., Director of Events',

  },
  {
    content:
      `   I cannot tell you how much we loved using this silent auction software. Everything was seamless…from set up, to bidding, to payment. We will absolutely use MyEvent next year.`,
    author: 'Henry M., CCHS Foundation',

  },
  {
    content:
      `   I tried MyEvent instead of typical paper raffle tickets. The system was easy to set up online and people who couldn't attend the event were still able to enter the raffle, which was HUGE bump in revenue.`,
    author: 'Alexander B., Pan-Mass Challenge',

  },
  {
    content:
      `     MyEvent is a great way to bring in money for your Fund A Need. The 24/7 tech support allows you to  a Need so much easier to run. Well definitely be using MyEvent again.`,
    author: 'Amy C., One Less Orphan Fund',

  },
]



const useStyles = makeStyles(theme => {
  return {
    root: {
      width: "100%",
      padding: 30,
      background: 'linear-gradient(135deg,#ffcc80 25%,#3edbf0 85%)',
    },
    heading: {
      color: "white",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2.4rem",
      }
    },
    box: {
      marginTop: 40,
    },
    slides: {
      // height: 350, 
      width: "60%",
      margin: "auto",
      color: "white",
      marginBottom: 140,
    },
    quote: {
      fontSize: "1.3rem",
      largeTop: 10,
      textAlign: "center",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
    },
    startQuote: {
      fontSize: "1.1rem",
      marginBottom: 12,
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.9rem",
      },
    },
    endQuote: {
      marginLeft: "10px",
      marginBottom: 15,
      fontSize: "1.1rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.9rem",
      },
    },
    quoteFrom: {
      marginTop: 35,
    }
  };
});



const Testimonials = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" align="center" className={classes.heading}>
        Reviews......
      </Typography>
      <Carousel interval={90000} indicators={false} className={classes.box}>
        {testimonial.map((c, index) => {
          return (
            <Carousel.Item interval={5000}>
              <div className={classes.slides}>
                <p>

                  <div className={classes.quote}>
                    <FormatQuoteIcon className={classes.startQuote} />
                    {c.content}
                    <FormatQuoteIcon className={classes.endQuote} />
                  </div>

                </p>
                <Carousel.Caption>
                  <p className={classes.quoteFrom}>- {c.author} </p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  )
}

export default Testimonials;
