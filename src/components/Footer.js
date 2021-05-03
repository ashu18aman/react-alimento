import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
    footer: {
        marginTop: '1rem',
        padding: '1rem',
        backgroundColor: 'rgb(235, 195, 64)',
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',

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