import menuItems from './MenuItems';
import Row from "./Row";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme => {
    return {
        root: {
            marginTop: '70px',
            // height: '100vh',
            width: '100%',
        },
    };
});

const Menu = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Row title={"This Week's Specials....."} items={menuItems} />
        </div>
    )
}

export default Menu;
