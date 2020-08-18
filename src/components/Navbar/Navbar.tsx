import React from "react";
import { Wrapper, Container, AppTitle } from "./Navbar.styled";
import Logo from "../Logo";

function Navbar() {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <AppTitle>Simple Task Manager</AppTitle>
        <div>User logo</div>
      </Container>
    </Wrapper>
  );
}

export default Navbar;
