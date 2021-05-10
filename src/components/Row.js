import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import clsx from 'clsx';
import RecipeReviewCard from "./Card";
import { v4 } from "uuid";
import Zoom from '@material-ui/core/Zoom';


const useStyles = makeStyles(theme => {
    return {
        root: {
            // marginBottom: '-30px',
        },
        heading: {
            marginLeft: '25px',
        },
        row: {
            display: 'flex',
            overflowX: 'scroll',
            overflowY: 'hidden',
            '&::-webkit-scrollbar': {
                // display: 'none',
                width: 0, 
                background: 'transparent',
            },
        },
    };
});

const Row = ({ title, items }) => {

    const classes = useStyles();



    return (
        <div className={classes.root}>
            <Typography variant="h4" className={classes.heading}>
                { title }
            </Typography>
            <div className={clsx(classes.row,'item-row')}>
                { 
                    items.slice(Math.random()*5).map((item,index) => (
                        <Zoom>
                            <RecipeReviewCard key={v4()} title={item.title} content={item.content}  className="card" />
                        </Zoom>
                    )) 
                }
                {/* <RecipeReviewCard /> */}
            </div>
        </div>
    )
}

export default Row
