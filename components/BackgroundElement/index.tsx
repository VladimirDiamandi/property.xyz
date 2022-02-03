import React from "react";

import AvmGraphicSVG from "./AvmGraphicSVG";

import { StyledBackgroundElement } from "../../styles/BackgroundElement.styles";

const BackgroundElement: React.FC = () => {
  return (
    <StyledBackgroundElement>
      <AvmGraphicSVG />
    </StyledBackgroundElement>
  );
};

export default BackgroundElement;
