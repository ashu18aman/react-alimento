import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    footer: {
        backgroundColor: '#3081f2',
        color: "white",
        width: '100%',
        padding: 15,
        justify: 'center',
        paddingBottom: 0,
        marginLeft:0,
        marginRight:0,
    },
});

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <Grid
                container direction="row"
                justify="center"
                alignItems="center"
                spacing={5}>
                <Grid item>
                    <Typography variant="h6" component="h6" align="center" gutterBottom>
                        <RestaurantIcon spacing={5} />
                        This is React-Alimento, a react based site for a Restaurant.
                </Typography>
                </Grid>
            </Grid>
            <Grid
                container direction="row"
                justify="center"
                alignItems="center"
                spacing={5}>
                <Grid item>
                    <InstagramIcon />
                </Grid>
                <Grid item>
                    <FacebookIcon />
                </Grid>
                <Grid item>
                    <LinkedInIcon />
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;