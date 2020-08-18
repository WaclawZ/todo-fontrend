import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 30rem;
  height: 2.5rem;
  border: none;
  border-radius: 1rem;
  background-color: #97ba89;
  box-sizing: border-box;
  color: #4c4c4c;
  text-indent: 1rem;
  font-size: 1.2rem;
  outline: none;
`;

const Input = () => {
  const [task, setTask] = useState("");

  return (
    <StyledInput
      type="text"
      placeholder="What do you want to do?"
      value={task}
      onChange={(event) => {
        setTask(event.target.value);
      }}
    />
  );
};

export default Input;
