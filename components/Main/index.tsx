import React from "react";
import { StyledMain } from "../../styles/Main.styles";
import { Container, Background } from "../../styles/Global.styles";


interface IMainProps {
  children: React.ReactNode
}

const Main = ({ children }: IMainProps) => {
  return (
    <Background color="#f3f4fa">
      <Container>
        <StyledMain>
          {children}
        </StyledMain>
      </Container>
    </Background>
  );
};

export default Main;