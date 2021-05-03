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
    },
    grd: {
        marginTop: 25,
    },

});

const Instant_order = () => {
    const classes = useStyles();
    return (
        <Container className="root">
            <Typography variant="h3" component="h3" align="center" gutterBottom>
                INSTANT ORDER
            </Typography>
            <Grid container direction="row"
                justify="center"
                alignItems="center">
                <Grid item>
                    <Form>
                        <FormControl
                            color="secondary"
                        >
                            <Grid
                                container direction="row"
                                justify="center"
                                alignItems="center"
                                spacing={5}>
                            <Grid item>
                                    <TextField
                                        margin="normal"
                                        id="outlined-multiline-static"
                                        label="Good Name"
                                        multiline
                                        rows={4}
                                        defaultValue="Default Value"
                                        variant="outlined"
                                        className="grd"
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        margin="normal"
                                        id="outlined-multiline-static"
                                        label="Email"
                                        multiline
                                        rows={4}
                                        defaultValue="Default Value"
                                        variant="outlined"
                                        className="grd"
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        margin="normal"
                                        id="outlined-multiline-static"
                                        label="Address"
                                        multiline
                                        rows={4}
                                        defaultValue="Default Value"
                                        variant="outlined"
                                        className="grd"
                                    />
                                </Grid>
                            </Grid>

                        </FormControl>
                    </Form>
                </Grid>
            </Grid>

        </Container>
    );
}

export default Instant_order;