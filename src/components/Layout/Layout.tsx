import React from "react";
import { Wrapper, Container } from "./Layout.styled";
import Navbar from "../Navbar";

function Layout({ children }: any) {
  return (
    <Wrapper>
      <Navbar />
      <Container>{children}</Container>
    </Wrapper>
  );
}

export default Layout;
