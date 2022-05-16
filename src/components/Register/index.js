import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Link,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import { dispatch } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";

const Register = ({ handleChange }) => {
  const paperStyle = {
    padding: 20,
    height: 400,
    width: 300,
    margin: "20px auto",
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign in</h2>
        </Grid>
        <TextField
          label="UserName"
          placeholder="Enter User Name"
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter Password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="Disabled" color="primary" />}
          label="remember me"
        />
        <Button
          //   onClick={dispatch()}
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
        >
          Sign in{" "}
        </Button>
        <Typography>
          you
          <Link href="#">Fogot Password</Link>
        </Typography>
        <Typography>
          Do you have a account
          <Link href="#" onClick={() => handleChange("event", 0)}>
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Register;
