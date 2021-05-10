import Typography from '@material-ui/core/Typography'
import { makeStyles } from "@material-ui/core";
import { ClassSharp } from '@material-ui/icons';

const useStyles = makeStyles(theme => {
    return {
        root: {
            marginTop: '94px',
            height: '100%',
        },
    };
});

const Cart = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h4">
                Page under development.....
            </Typography>
        </div>
    )
}

export default Cart
