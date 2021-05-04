import { Container, Grid } from '@material-ui/core';
import React from 'react';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'

const Feedback = () => {
    return (
        <Container>
            <ContactMailIcon />
            <Grid container direction="row"
                justify="center"
                alignItems="center">
                <Grid item xs={6} >
                <TextField id="Name" label="Full Name" variant="outlined" />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Feedback;