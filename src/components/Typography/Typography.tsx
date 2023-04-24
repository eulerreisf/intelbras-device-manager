import React from "react";
import Typography from "@mui/material/Typography";
import { TypographyComponentType } from "../../types/Typography";

const TypographyComponent = (props: TypographyComponentType) => {
  const { text, variant, style } = props;
  return (
    <Typography style={style} variant={variant}>
      {text}
    </Typography>
  );
};

export default TypographyComponent;
