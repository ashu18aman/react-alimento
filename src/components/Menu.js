import { useEffect } from "react";
import menuItems from './MenuItems';
import Row from "./Row";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme => {
    return {
        root: {
            marginTop: '94px',
            // height: '100vh',
            width: '100%',
            marginLeft: '14px',
        },
    };
});

const Menu = () => {
    const classes = useStyles();

    
    // useEffect(() => {
    //     alert('If you are viewing this site on laptop then to scroll horizontally please scroll by pressing Shift key and scroll the mouse wheeel at the same time.')
    // },[])

    return (
        <div className={classes.root}>
            <Row title={"This Week's Specials....."} items={menuItems} />
            <Row title={"Top Trending....."} items={menuItems} />
            <Row title={"Finger Licking....."} items={menuItems} />
        </div>
    )
}

export default Menu;
