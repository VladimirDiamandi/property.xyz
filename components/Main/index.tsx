import React from "react";

import Title from "../Title";
import Form from "../Form";
import PoweredBy from "../PoweredBy";

import { StyledMain } from "../../styles/Main.styles";
import { Container, Background } from "../../styles/Global.styles";

const Main = () => {
  return (
    <Background color="#f3f4fa">
      <Container>
        <StyledMain>
          <Title />
          <Form btnName="Search" />
          <PoweredBy />
        </StyledMain>
      </Container>
    </Background>
  );
};

export default Main;
