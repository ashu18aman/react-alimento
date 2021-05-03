import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
    footer: {
        backgroundColor: 'rgb(235, 195, 64)',
        width: '100%',
        padding: 15,

    },
});

const Footer = () => {
    const classes = useStyles();
    return (
        <Container className={classes.footer}>
            <p>This is some content in sticky footer</p>
        </Container>
    );
}

export default Footer;