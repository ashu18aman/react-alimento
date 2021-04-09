import { ListItemText, makeStyles } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { purple, teal } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import Brightness4Icon from '@material-ui/icons/Brightness4';
import SearchOutlined from "@material-ui/icons/SearchOutlined";

const useStyles = makeStyles((theme) => {
  return {
    navbar: {
      backgroundColor: purple[500],
      color: "white",
      display: "flex",
    },
    menuIcon: {
      // display: 'none',
      transition: theme.transitions.create("opacity", { duration: "0.3s" }),
      opacity: 0,
      cursor: "default",
      [theme.breakpoints.down("sm")]: {
        opacity: 1,
        cursor: "pointer",
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
      color: "inherit",
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
      color: 'black',
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
  };
});

const NavBar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar
        position="sticky"
        elevation={2}
        color="secondary"
        className={[classes.navbar, classes.whiteColor]}
      >
        <Toolbar>
          {/* Navigation Icon */}
          <IconButton edge="start" className={classes.menuIcon}>
            <MenuIcon className={classes.whiteColor} />
          </IconButton>

          {/* Title */}
          <div className={classes.header}>
            <List className={classes.headerList}>
              <ListItem>
                <Typography className={classes.title} noWrap variant="h5">
                  Alimento
                </Typography>
              </ListItem>
              {/* <ListItem>
								<Link to="/" className={classes.headerLinksText}>Home</Link>
							</ListItem> */}
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
            {/* <ListItem>
							<Link to="/" className={classes.whiteColor}>
								<Brightness4Icon />
							</Link>
						</ListItem>
						<ListItem>
							<Link to="/" className={classes.whiteColor}>
								<FacebookIcon />
							</Link>
						</ListItem>
						<ListItem>
							<Link to="/" className={classes.whiteColor}>
								<TwitterIcon />
							</Link>
						</ListItem>
						<ListItem>
							<Link to="/" className={classes.whiteColor}>
								<InstagramIcon />
							</Link>
						</ListItem> */}
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
    </div>
  );
};

export default NavBar;
