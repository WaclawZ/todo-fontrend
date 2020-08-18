import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import Input from "../../components/Input";

const InputWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 3rem;
`;

const Home = () => {
  return (
    <Layout>
      <InputWrapper>
        <Input />
      </InputWrapper>
      <div>task list</div>
    </Layout>
  );
};

export default Home;
