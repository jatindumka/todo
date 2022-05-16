import React from "react";
import styled from "styled-components";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useNavigate } from "react-router-dom";

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
  //   const navigate = useNavigate();
  //   setTimeout(()=>)
  return (
    <>
      {localStorage.getItem("user") ? (
        <Navbar />
      ) : (
        <Container>
          <Wrapper>
            <Left>TodoApp</Left>
            <Center></Center>
            <Right>
              <MenuItem
                onClick={() => {
                  localStorage.removeItem("user");
                  //   navigate("/sign-up");
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
      )}
    </>
  );
};

export default Navbar;
