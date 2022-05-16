import { Box, Paper, Tab, Tabs, Typography } from "@material-ui/core";
import { useState } from "react";
import Register from "../Register";
import SignUp from "../SignUp";

const SignInOut = () => {
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const paperStyle = { width: 340, margin: "20px auto" };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Paper elevation={0} style={paperStyle}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Sign in" />
        <Tab label="Sign up" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SignUp handleChange={handleChange} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Register handleChange={handleChange} />
      </TabPanel>
    </Paper>
  );
};

export default SignInOut;
