import React from "react";

import { StyledFormItem } from "../../styles/FormItem.styles";

interface IFormItemProps {
  label: string
  divider?: boolean
  children: React.ReactNode
}


const FormItem: React.FC<IFormItemProps> = ({ label, divider = false, children }) => (
  <StyledFormItem divider={divider}>
    <span>{label}</span>
    {children}
  </StyledFormItem>
);

export default FormItem;
