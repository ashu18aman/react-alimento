import { Container, Grid } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import RecipeReviewCard from './Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        marginTop: 15,
        width: '100%',
    },
});

const Featured = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root} >
            <Typography variant="h3" component="h3" align="center" gutterBottom>
                FEATURED DISHES
            </Typography>
            <Grid container direction="row"
                justify="center"
                alignItems="center">
                <Grid item>
                    <RecipeReviewCard />
                </Grid>
                <Grid item>
                    <RecipeReviewCard />
                </Grid>
                <Grid item>
                    <RecipeReviewCard />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Featured;