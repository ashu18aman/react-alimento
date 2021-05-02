import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { Form } from 'react-bootstrap';
import { FormControl } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/dom';
import purple from '@material-ui/core/colors/purple';

const useStyles = makeStyles({
    root: { 
        marginTop: 15,
        width: '100%',
        backgroundColor: 'purple',
    },
    grd:{
        marginTop: 25,
    },
    
});

const Instant_order = () => {
    const classes = useStyles();
    return (
        <Container className="root">
            <div>
                <Typography variant="h3" component="h3" align="center" gutterBottom>
                        Check out our today's surprise meal !!!
                </Typography>
                <Typography variant="h5" component="h3" align="center" gutterBottom>
                    Fill the below form and we will contact you shortly.... 
                </Typography>
            </div>
            <Grid container direction="row"
                justify="center"
                alignItems="center">
                <Grid item>
                    <Form>
                        <FormControl
                        color="secondary"
                        >
                            <TextField
                                margin="normal"
                                id="outlined-multiline-static"
                                label="Name"
                                multiline
                                rows={2}
                                defaultValue="Default Value"
                                variant="outlined"
                                className="grd"
                            />
                            <TextField
                                margin="normal"
                                id="outlined-multiline-static"
                                label="Email"
                                multiline
                                rows={2}
                                defaultValue="Default Value"
                                variant="outlined"
                                className="grd"
                            />
                            <TextField
                                margin="normal"
                                id="outlined-multiline-static"
                                label="Address"
                                multiline
                                rows={2}
                                defaultValue="Default Value"
                                variant="outlined"
                                className="grd"
                            />

                        </FormControl>
                    </Form>
                </Grid>
            </Grid>

        </Container>
    );
}

export default Instant_order;