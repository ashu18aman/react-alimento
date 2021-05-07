import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { Form } from 'react-bootstrap';
import { FormControl } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';


const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg,#ac57f2 25%,#3edbf0 95%)',
        color: "white",
        padding: 15,
        width: '100vw',
        marginLeft:0,
        marginRight:0,
    },
    grd: {
        marginTop: 25,
    },
    textInp: {
        width: 380,
        background: 'linear-gradient(45deg, #e8eaf6 30%, #e8eaf6 90%)',
        outline: 'none',
    },
    addrInp: {
        width: '100%',
        background: 'linear-gradient(45deg, #e8eaf6 30%, #e8eaf6 90%)',
        outline: 'none',
    },
    sub: {
        width:'70%',
        padding: 15,
        marginTop: 15,
        marginLeft: "15%",
        marginRight: "30%",
        background: 'linear-gradient(45deg,#ff699f 30%,#ff699f 90%)',
        color: '#212121',
    },

});

const InstantOrder = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
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
                            <Grid
                                container direction="row"
                                justify="center"
                                alignItems="center"
                                spacing={5}>
                                <Grid item>
                                    <TextField id="outlined-basic" label="Name" variant="outlined" className={classes.textInp} />
                                </Grid>
                                <Grid item>
                                    <TextField id="outlined-basic" label="Email" variant="outlined" className={classes.textInp} />
                                </Grid>
                                <Grid item>
                                    <TextField id="outlined-basic" label="Address" variant="outlined" className={[classes.textInp]} />
                                </Grid>
                            </Grid>
                        </FormControl>
                        <Button
                            variant="contained"
                            color="Secondary"
                            className={classes.sub}
                            endIcon={<SendOutlinedIcon />}
                        >
                            Order Now
                        </Button>
                    </Form>
                </Grid>
            </Grid>

        </div >
    );
}

export default InstantOrder;