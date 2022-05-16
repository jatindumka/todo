import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username, password };
    // send the username and password to the server
    const response = await axios.post(
      "http://blogservice.herokuapp.com/api/login",
      user
    );
    // set the state of the user
    setUser(response.data);
    // store the user in localStorage
    localStorage.setItem("user", response.data);
    setTimeout(() => navigate("/home"), 2000);
    console.log("to redirect to home", response.data);
  };

  //   useEffect(() => {
  //     const loggedInUser = localStorage.getItem("user");
  //     if (loggedInUser) {
  //       //   const foundUser = JSON.parse(loggedInUser);
  //       console.log("inUseEffect");

  //       navigate("/home");
  //     }
  //   }, []);

  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={{ backgroundColor: "green" }}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={{ margin: 0 }}>Sign in </h2>
          {/* <Typography variant="caption">
                Please fill this form to create account
            </Typography> */}
        </Grid>
        <form>
          {/* <TextField fullWidth label={"Name"}></TextField> */}
          <TextField
            fullWidth
            label={"Email"}
            onChange={({ target }) => setUsername(target.value)}
          ></TextField>
          <TextField
            fullWidth
            label={"Password"}
            onChange={({ target }) => setPassword(target.value)}
          >
            {" "}
          </TextField>
          {/* <TextField fullWidth label={"Confirm Password"}>
            {" "}
          </TextField> */}
          <Button
            style={{ marginTop: 10 }}
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Sign in
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignUp;
