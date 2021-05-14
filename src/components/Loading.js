import { makeStyles } from "@material-ui/core";
import RingLoader from "react-spinners/RingLoader";
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => {
    return {
        root: {
            background: 'linear-gradient(45deg,#424242 25%,#424242 95%)',
            color:"#ffffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: '100vh',
            width: '100vw',
        },
    };
});

const Loading = ({ loading }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <RingLoader color={"#ff9800"} loading={loading} size={150} />

            <div>
                <Typography variant="h3" component="h3" align="center">
                    Loading...
                </Typography>
            </div>

        </div>
    )
}

export default Loading;
