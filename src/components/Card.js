import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import img3 from "./Images/thali.jpg";
import { SendOutlined } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 20,
    width: 345,
    [theme.breakpoints.down("sm")]:{
      width: 300,
    },
    flexShrink: 0,
    paddingBottom: "3px",
    transition: '0.3s ease-in',
    borderRadius: '20px',
    '&:hover': {
      transform: "scale(1.05)",
    },
  },
  header: {
    // background: 'linear-gradient(180deg, #ff9d85 20%, #FED54A 60%)',
  },
  avatar: {

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'green',
  },
  buy: {
    width: '60%',
    margin: '10px auto',
    background: 'orange',
    '&:hover': {
      background: '#ff7066',
    },
  },
}));

export default function RecipeReviewCard({ title, content, img, type}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" style={{background: `${type === 'V' ? 'green' : 'red' }`}}>
            { type === 'V' ? 'V' : 'N' }
          </Avatar>
        }
        title={title}
        subheader="September 14, 2016"
        className={classes.header}
      />
      <CardMedia
        className={classes.media}
        image={img}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions >
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
          <Button component={Link} to="/cart" variant="contained" color="secondary" className={classes.buy}>
            Buy Now <SendOutlined style={{marginLeft:'10px'}}/>
          </Button>
      </CardActions>
      
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
}
