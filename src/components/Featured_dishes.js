import { Container, Grid } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import RecipeReviewCard from './Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
    root: {
        marginTop: 15,
        width: '100%',
    },
    add:{
        height: 400,
        width: 400,
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
                <Grid item>
                    <RecipeReviewCard />
                </Grid>
                <Grid item>
                    <RecipeReviewCard />
                </Grid>
                <Grid item>
                    <AddIcon fontSize="large" className={classes.add} />
                    <Typography variant="h4" component="h4" align="center" gutterBottom>
                More 
            </Typography>
                    
                </Grid>
            </Grid>
        </Container>
    );
}

export default Featured;