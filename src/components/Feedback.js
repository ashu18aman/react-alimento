import { Container, Grid } from '@material-ui/core';
import React from 'react';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FormControl } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';



const useStyles = makeStyles((theme) => {
    return {
    root: {
        marginTop: 60,
        height: "auto",
        background: 'linear-gradient(135deg, #ffebee 20%, #e1bee7 60%)',
        paddingTop: 15,
        width: '100vw',
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        justify: "center",
        flexGrow: 1,
        [theme.breakpoints.down("sm")]: {
            height: "100%",
        },
        paddingBottom: 15,
    },
    icon: {
        background: 'linear-gradient(135deg, #ff9d85 20%, #FED54A 60%)',
        margin: 20,
        alignItems: "center",
    },
    grd: {
        marginLeft: 20,
        paddingLeft: 20,
        marginRight: 20,
        paddingRight: 20,
    },
    txtArea: {
        margin:"15px 0 20px",
    },
    send:{
        width:"100%",
        margin:"auto",
    },
}});


const Feedback = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div >
                <Typography variant="h4" component="h4" align="center" gutterBottom>
                    <ContactMailIcon fontSize="large" className={classes.icon} />
                Feedback
            </Typography>
            </div>
            <div className={classes.grd}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField required label=" Name" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            label="Email"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField required label="City" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField required label="Age" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1">
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                        
                        <TextField
                            variant="outlined"
                            required
                            label="Any Remark"
                            fullWidth
                            multiline
                            rows={4}
                            autoComplete="cc-csc"
                            className={classes.txtArea}
                        />

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Please Rate The Site</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1">
                                <FormControlLabel value="Excellent" control={<Radio />} label="Excellent" />
                                <FormControlLabel value="Good" control={<Radio />} label="Good" />
                                <FormControlLabel value="Average" control={<Radio />} label="Average" />
                                <FormControlLabel value="Bad" control={<Radio />} label="Bad" />
                                <FormControlLabel value="Very Bad" control={<Radio />} label="Very Bad" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    {/* <Grid item xs={12} md={6}>
                    </Grid> */}
                    <Grid item xs={12} md={6} className={classes.send}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.send}
                            endIcon={<SendOutlinedIcon />}
                        >
                            Send
                        </Button>
                    </Grid>

                </Grid>
            </div>
        </div>
    );
}

export default Feedback;