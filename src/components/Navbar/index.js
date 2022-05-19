import React from "react";
import styled from "styled-components";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useNavigate } from "react-router-dom";
import { FormControl, InputLabel, Select } from "@material-ui/core";

const Container = styled.div`
  height: 60px;
  background-color: white;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: center;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Center = styled.div`
  flex: 1;
`;

const Navbar = () => {
  const navigate = useNavigate();
  const [lang, setLang] = React.useState("en");

  const handleChange = (event) => {
    setLang(event.target.value);
  };
  //   setTimeout(()=>)
  return (
    <>
      {localStorage.getItem("user") ? (
        <Container>
          <Wrapper>
            <Left>TodoApp</Left>
            <Center></Center>
            <Right>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Lang</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={lang}
                  label="lang"
                  onChange={handleChange}
                >
                  <MenuItem value={"en"}>eng</MenuItem>
                  <MenuItem value={"fr"}>fr</MenuItem>
                  <MenuItem value={"sp"}>sp</MenuItem>
                </Select>
              </FormControl>
              <MenuItem
                onClick={() => {
                  localStorage.removeItem("user");
                  navigate("/sign-up");
                }}
              >
                {localStorage.getItem("user") ? "LogOut" : null}
              </MenuItem>
              <MenuItem>
                <AccountCircleIcon />
              </MenuItem>
            </Right>
          </Wrapper>
        </Container>
      ) : null}
    </>
  );
};

export default Navbar;
