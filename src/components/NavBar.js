import { useState } from "react";
import {  makeStyles } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { purple } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import InfoIcon from '@material-ui/icons/Info';
import FeedbackIcon from '@material-ui/icons/Feedback';

//color variable
const black = 'black';

const useStyles = makeStyles((theme) => {
  return {
    navbar: {
      backgroundColor: '#FF9F4A',
      color: "white",
      display: "flex",
      // marginLeft:'-20px',
      // maxWidth:1200,
      maxWidth:'100vw',
      paddingLeft:'20px',
      paddingRight:'20px',
      marginLeft:'-10px',
    },
    menuIcon: {
      transition: theme.transitions.create("opacity", { duration: "0.3s" }),
      opacity: 0,
      cursor: "default",
      pointerEvents: 'none',
      [theme.breakpoints.down("sm")]: {
        opacity: 1,
        cursor: "pointer",
        pointerEvents: 'auto',
      },
    },
    title: {
    },
    header: {
      display: "flex",
      // flexGrow: 1,
      marginLeft: "-44px",
      marginRight: "auto",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "-10px",
      },
    },
    headerList: {
      display: "flex",
      [theme.breakpoints.down("md")]: {
        marginRight: "-122px",
      },
    },
    headerLinksText: {
      textDecoration: "none",
      color: "white",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    titleLinkText: {
      textDecoration: "none",
      color: "white",
    },
    whiteColor: {
      backgroundColor: '#FF9F4A',
      color: "white",
    },
    navList: {
      display: "flex",
    },
    navLinks: {
      borderColor: "white",
      marginRight: "-24px",
      textDecoration: "none",
    },
    navLinksText: {
      textDecoration: "none",
      color: "white",
    },
    searchBar: {
      backgroundColor: "white",
      color: "white",
      display: "flex",
      borderRadius: theme.shape.borderRadius,
      height: "32px",
      width: "auto",
      marginRight: "10px",
      [theme.breakpoints.down("md")]: {
        marginRight: "-6px",
        marginLeft: "6px",
        width:"200px",
      },
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    searchIcon: {
      // padding: theme.spacing(0.5, 2),
      pointerEvents: "none",
      width:'10px',
      color: black,
    },
    searchInput: {
      padding: theme.spacing(2, 0),
      transition: theme.transitions.create("width"),
      width: "19ch",
      [theme.breakpoints.up("md")]: {
        width: "30ch",
        "&:focus": {
          width: "40ch",
        },
      },
    },
    rightSide:{
      display: "flex",
      justifyContent: "center",
      alignItems:"center",
    },
    drawer: {
      width: '300px',
      display: 'flex',
    },
    drawerPaper: {
      width: '300px',
    },
    drawerLinksText: {
      textDecoration: "none",
      color: black,
      display: 'flex',
      marginBottom: '10px',
    },
    drawerSearchBar: {
      backgroundColor: "white",
      color: "white",
      display: "none",
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(0,2),
      height: "32px",
      width: "80%",
      marginRight: "10px",
      marginTop: "10px",
      [theme.breakpoints.down("xs")]: {
        display: "flex",
      },
    },
    drawerSearchIcon: {
      fontSize: '3px',
      marginLeft: '-20px',
      pointerEvents: "none",
      color: black,
    },
    drawerIcon: {
      marginRight: '15px',
      color: black,
    },
    avatar: {
      margin: '20px 10px 20px 0',
    },
    appbar:{
      width:'100vw',
    }
  };
});

const NavBar = () => {
  const classes = useStyles();
  const [left, setLeft] = useState(false);
  const titleLinkText = {textDecoration: "none",color: "white",}
  const drawerLinkText = {textDecoration: "none",color: "black",}

  const toggleDrawer =  (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setLeft(!left);
    console.log(left)
  };

  return (
    <div position="sticky" className={[classes.navbar,classes.appbar]}>
      <AppBar
        elevation={2}
        className={[classes.whiteColor]}
      >
        <Toolbar>
          {/* Navigation Icon */}
          <IconButton 
            edge="start" 
            className={classes.menuIcon}
            onClick={ toggleDrawer }
          >
              <MenuIcon className={classes.whiteColor} />
          </IconButton>

					{/* Title */}
					<div className={classes.header}>
						<List className={classes.headerList}>

							<ListItem>
								<Typography className={classes.title} noWrap variant="h5">
								<Link to="/" style={titleLinkText}>Alimento</Link>
								</Typography>
							</ListItem>

              <ListItem>
                <Link to="/" style={titleLinkText} className="linkText">
                  About
                </Link>
              </ListItem>

              <ListItem>
                <Link to="/" style={titleLinkText} className="linkText">
                  Menu
                </Link>
              </ListItem>

              <ListItem>
                <Link to="/feedback" style={titleLinkText} className="linkText">
                  Feedback
                </Link>
              </ListItem>

            </List>
          </div>


          <div className={classes.rightSide}>
          {/* Search Bar */}
              <div className={classes.searchBar} onClick={e => console.log('click')}>
                <div>
                  <Button className={classes.searchIcon}>
                    <SearchOutlined />
                  </Button>
                </div>
                <InputBase placeholder="Search…" className={classes.searchInput} />
              </div>

              {/* Buttons */}
              <List className={classes.navList}>
                <ListItem>
                  <Button variant="outlined" className={classes.navLinks}>
                    <Link to="/" style={titleLinkText}>
                      SignUp
                    </Link>
                  </Button>
                </ListItem>
                <ListItem>
                  <Button variant="contained">
                    <Link to="/" style={titleLinkText}>
                      Login
                    </Link>
                  </Button>
                </ListItem>
              </List>
            </div>
          </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer 
        anchor = "left" 
        open = {left} 
        onClose = { toggleDrawer }
        className = {classes.drawer}
        classes = {{ paper: classes.drawerPaper }}
      >
          <List>
              <ListItem>
                <Avatar className={classes.avatar} />
                <Typography variant="h6">Welcome</Typography>
              </ListItem>

              <Divider />

              <ListItem>
                <Link to="/" style={drawerLinkText}>
                  <InfoIcon className={classes.drawerIcon} />
                  About
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/" style={drawerLinkText}>
                  <RestaurantMenuIcon className={classes.drawerIcon} />
                  Menu
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/feedback" style={drawerLinkText}>
                  <FeedbackIcon className={classes.drawerIcon} />
                  Feedback
                </Link>
              </ListItem>
          </List>

          <Divider />

          <div className={classes.drawerSearchBar} onClick={e => console.log('click')}>
              <Button className={classes.drawerSearchIcon}>
                <SearchOutlined />
              </Button>
            <InputBase placeholder="Search…" />
          </div>
      </Drawer>
    </div>
  );
};

export default NavBar;


