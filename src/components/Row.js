import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import clsx from 'clsx';
import RecipeReviewCard from "./Card";


const useStyles = makeStyles(theme => {
    return {
        root: {

        },
        row: {
            display: 'flex',
            overflowX: 'scroll',
            overflowY: 'hidden',
            '&::-webkit-scrollbar': {
                display: 'none',
            },
        },
    };
});

const Row = ({ title, items }) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography>
                { title }
            </Typography>
            <div className={clsx(classes.row,'item-row')}>
                {/* { 
                    items.map((item,index) => (
                        <h1>{item.content}</h1>
                    )) 
                } */}
                <RecipeReviewCard />
                <RecipeReviewCard />
                <RecipeReviewCard />
                <RecipeReviewCard />
                <RecipeReviewCard />
                <RecipeReviewCard />
                <RecipeReviewCard />
                <RecipeReviewCard />
                <RecipeReviewCard />
                <RecipeReviewCard />
            </div>
        </div>
    )
}

export default Row
