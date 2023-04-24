import React from "react";
import Typography from "@mui/material/Typography";
import { TypographyComponentType } from "../../types/Typography";

const TypographyComponent = (props: TypographyComponentType) => {
  const { text, variant } = props;
  return <Typography variant={variant}>{text}</Typography>;
};

export default TypographyComponent;
