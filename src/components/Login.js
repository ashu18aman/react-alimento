import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
// import VisibilityIcon from "@material-ui/icons/Visibility";

const useStyles = makeStyles(() => {
  return {
    heading: {
      textAlign: "center",
      marginTop: 84,
      marginBottom: 40,
    },
    textarea: {
      marginTop: -40,
    },
    btn:{
      width: "40%",
      margin: "auto",
    }
  };
});

const Login = () => {
  const classes = useStyles();
  return (
    <Container>
      <Typography className={classes.heading} variant="h2">
        Login Form
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography className={classes.heading} variant="h4">
            Email Address
          </Typography>
          <TextField
            className={classes.textarea}
            label="Email Address"
            variant="outlined"
            color="secondary"
            required
            placeholder="name@email.com"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.heading} variant="h4">
            Password
            {/* <VisibilityIcon /> */}
          </Typography>
          <TextField
            className={classes.textarea}
            label="Password"
            variant="outlined"
            color="secondary"
            required
            placeholder="Enter your password"
            fullWidth
          />
        </Grid>
        <Grid item>
          <Button
            color="secondary"
            variant="contained"
            size="medium"
            className={classes.btn}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
