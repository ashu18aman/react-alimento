import React from "react";
import {Link} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
// import VisibilityIcon from "@material-ui/icons/Visibility";

const useStyles = makeStyles(() => {
  return {
    root:{
      // background: 'linear-gradient(135deg, #fbe6c2 20%, #fbe6c2 60%)',
      background: 'linear-gradient(45deg,#ac57f2 25%,#3edbf0 95%)',
      marginTop: -20,
      paddingTop:30,
    },
    heading: {
      textAlign: "center",
      marginTop: 84,
      marginBottom: 40,
    },
    fields: {
      marginTop: 5,
      marginBottom: 10,
      textAlign:"center",
    },
    textarea: {
      margin:"auto",
    },
    forgotpassword:{
      marginLeft: 15,
      marginTop: -10,
      marginBottom: 30,
    },
    btn:{
      width: "95%",
      margin: "auto",
      marginBottom: 60,
      padding:15,
    }
  };
});

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Container>
      <Typography className={classes.heading} variant="h2">
        Login Form
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography className={classes.fields} variant="h4">
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
          <Typography className={classes.fields} variant="h4">
            Password
            {/* <VisibilityIcon /> */}
          </Typography>
          <TextField
            className={classes.textarea}
            label="Password"
            type="password"
            variant="outlined"
            color="secondary"
            required
            placeholder="Enter your password"
            fullWidth
          />
        </Grid>
          <Typography variant="p" className={classes.forgotpassword}>
            <Link to="#">Forgot Password? </Link>
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            type="submit"
            className={classes.btn}
          >
            Login <SendOutlinedIcon />
          </Button>
      </Grid>
    </Container>
    </div>
  );
};

export default Login;
