import { Container, Grid } from '@material-ui/core';
import React from 'react';
import RecipeReviewCard from './Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        marginTop: 15,
        width: '100%',
    },
    addIcon:{
        fontSize: 200,
    },
    link: {
        textDecoration: "none",
    }
});

const Featured = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root} >
            <Typography variant="h3" component="h3" align="center" gutterBottom>
                Popular dishes.......
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
                    <Link style={{textDecoration:'none',color:'black'}}>
                        <div style={{padding: '50px'}}>
                            <AddIcon fontSize="large" className={classes.addIcon} />
                            <Typography variant="h4" component="h4" align="center" gutterBottom>
                                More 
                            </Typography>
                        </div>
                    </Link>
                    
                </Grid>
            </Grid>
        </Container>
    );
}

export default Featured;