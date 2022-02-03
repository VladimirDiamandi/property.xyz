import React from "react";

import BitmapSVG from "./BitmapSVG";

import { StyledPoweredByElement } from "../../styles/PoweredBy.styles";

const PoweredBy: React.FC = () => {
  return (
    <StyledPoweredByElement>
      <span>Powered by</span>
      <span><BitmapSVG /></span>
    </StyledPoweredByElement>
  );
};

export default PoweredBy;
