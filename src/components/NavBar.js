import { List, ListItem, makeStyles } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { cyan, blueGrey } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const useStyles = makeStyles((theme) => {
	return {
		navbar: {
			backgroundColor: blueGrey[50],
			color: 'white',
		},
		title: {
			flexGrow: 1,
			marginLeft: theme.spacing(5),
		},
		whiteColor: {
			color: 'white',
		},
		navList: {
			display: 'flex',
		}
	}
})

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
					<IconButton edge="start">
						<MenuIcon className={classes.whiteColor} />
					</IconButton>

					{/* Title */}
					<Typography className={classes.title}>
						The Alimento
					</Typography>

					{/* Social Links */}
					<List className={classes.navList}>
						<ListItem>
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
						</ListItem>
					</List>


			</Toolbar>
		</AppBar>
        </div >
    )
}

export default NavBar
