import { Container, Grid } from '@material-ui/core';
import React from 'react';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles({
    root: {
        marginTop:70,
    },

});


const Feedback = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ContactMailIcon />
            <Grid container direction="row"
                justify="center"
                alignItems="center">
                <Grid item xs={12} >
                <TextField id="Name" label="Full Name" variant="outlined" />
                </Grid>
            </Grid>
        </div>
    );
}

export default Feedback;