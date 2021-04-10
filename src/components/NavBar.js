import { useState } from "react";
import {  makeStyles } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { purple, teal } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => {
  return {
    navbar: {
      backgroundColor: purple[500],
      color: "white",
      display: "flex",
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
      // flexGrow: 1,
      // marginLeft: '10px',
      // marginRight: '20px',
    },
    header: {
      display: "flex",
      flexGrow: 1,
      marginLeft: "-30px",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "-10px",
      },
    },
    headerList: {
      display: "flex",
      [theme.breakpoints.down("md")]: {
        marginRight: "-92px",
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
      color: "white",
    },
    navList: {
      display: "flex",
    },
    navLinks: {
      borderColor: "white",
      marginRight: "-24px",
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
        marginRight: "-12px",
        //  display: 'none',
      },
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    searchIcon: {
      padding: theme.spacing(0.5, 2),
      // height: '10px',
      // position: 'absolute',
      pointerEvents: "none",
      // display: 'flex',
      // alignItems: 'center',
      // justifyContent: 'center',
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
    drawer: {
      width: '300px',
      display: 'flex',
    },
    drawerPaper: {
      width: '300px',
    },
    drawerLinksText: {
      textDecoration: "none",
      color: "white",
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
      // padding: theme.spacing(0.5, 3),
      fontSize: '3px',
      marginRight: '11px',
      // height: '10px',
      // position: 'absolute',
      pointerEvents: "none",
      // display: 'flex',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    drawerIcon: {
      marginRight: '15px',
    },
    avatar: {
      margin: '20px 10px 20px 0',
    }
  };
});

const NavBar = () => {
  const classes = useStyles();
  const [left, setLeft] = useState(false);

  const toggleDrawer =  (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setLeft(!left);
    console.log(left)
  };

  return (
    <div>
      <AppBar
        position="sticky"
        elevation={2}
        // color="secondary"
        className={[classes.navbar, classes.whiteColor]}
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
								<Link to="/" className={classes.titleLinkText}>Alimento</Link>
								</Typography>
							</ListItem>

              <ListItem>
                <Link to="/" className={classes.headerLinksText}>
                  About
                </Link>
              </ListItem>

              <ListItem>
                <Link to="/" className={classes.headerLinksText}>
                  Menu
                </Link>
              </ListItem>

            </List>
          </div>

          {/* Search Bar */}
          <div className={classes.searchBar}>
            <div className={classes.searchIcon}>
              <SearchOutlined />
            </div>
            <InputBase placeholder="Search…" className={classes.searchInput} />
          </div>

          {/* Buttons */}
          <List className={classes.navList}>
            <ListItem>
              <Button variant="outlined" className={classes.navLinks}>
                <Link to="/" className={classes.navLinksText}>
                  SignUp
                </Link>
              </Button>
            </ListItem>
            <ListItem>
              <Button variant="contained">
                <Link to="/" className={classes.navLinksText}>
                  Login
                </Link>
              </Button>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>


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
                <Link to="/" className={classes.drawerLinksText}>
                  <InfoIcon className={classes.drawerIcon} />
                  About
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/" className={classes.drawerLinksText}>
                  <RestaurantMenuIcon className={classes.drawerIcon} />
                  Menu
                </Link>
              </ListItem>
          </List>

          <Divider />

          <div className={classes.drawerSearchBar}>
            <div className={classes.drawerSearchIcon}>
              <SearchOutlined />
            </div>
            <InputBase placeholder="Search…" />
          </div>
      </Drawer>
    </div>
  );
};

export default NavBar;
