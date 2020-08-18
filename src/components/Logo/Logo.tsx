import React from "react";
import { StyledImg } from "./Logo.styled";
import logo from "../../images/logo.jpg";

function Logo() {
  return <StyledImg src={logo} alt="logo" />;
}

export default Logo;
