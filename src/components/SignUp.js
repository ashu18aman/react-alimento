import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const useStyles = makeStyles(() => {
  return {
    root: {
      background: "linear-gradient(135deg, #fbe6c2 20%, #fbe6c2 60%)",
      // background: "linear-gradient(135deg,#538FFB 25%,#ff7575 65%)",
      marginTop: -20,
      paddingTop: 30,
    },
    heading: {
      textAlign: "center",
      marginTop: 84,
      marginBottom: 40,
    },
    fields: {
      marginTop: 5,
      marginBottom: 10,
      textAlign: "center",
    },
    textarea: {
      margin: "auto",
    },
    btn: {
      width: "95%",
      margin: "auto",
      marginBottom: 60,
      marginTop: 30,
      padding: 15,
    },
  };
});

const SignUp = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Typography className={classes.heading} variant="h2">
          Signup Form
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography className={classes.fields} variant="h4">
              Name
            </Typography>
            <TextField
              className={classes.textarea}
              label="Full name"
              variant="outlined"
              color="secondary"
              required
              placeholder="Enter your name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.fields} variant="h4">
              Email Address
            </Typography>
            <TextField
              className={classes.textarea}
              label="Email"
              variant="outlined"
              color="secondary"
              required
              placeholder="name@email.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.fields} variant="h4">
              Password
            </Typography>
            <TextField
              className={classes.textarea}
              label="Create Password"
              type="password"
              variant="outlined"
              color="secondary"
              required
              placeholder="Enter your password"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.fields} variant="h4">
              Address
            </Typography>
            <TextField
              className={classes.textarea}
              label="Address"
              variant="outlined"
              color="secondary"
              required
              placeholder="Enter your full address"
              fullWidth
            />
          </Grid>
          <Button
            color="secondary"
            variant="contained"
            type="submit"
            className={classes.btn}
          >
            Sign Up <SendOutlinedIcon />
          </Button> 
        </Grid>
      </Container>
    </div>
  );
};

export default SignUp;
