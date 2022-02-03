import React from "react";
import Link from "next/link";

import { StyledServiceFeedback } from "../../styles/ServiceFeedback.styles";
import { Container, Background } from "../../styles/Global.styles";

const ServiceFeedback: React.FC = () => {
  return (
    <Background>
      <Container>
        <StyledServiceFeedback>
          <span>Beta</span>
          <p>
            This is new service. Please leave your{" "}
            <Link href="/">feedback</Link>
          </p>
        </StyledServiceFeedback>
      </Container>
    </Background>
  );
};

export default ServiceFeedback;
