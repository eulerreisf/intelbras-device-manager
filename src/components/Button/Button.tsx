import React from "react";
import { StyledButton } from "./styles";
import { Add } from "@mui/icons-material";
import { ButtonProps } from "../../types";

//todo needs fix on hover and disable

export default function Button(props: ButtonProps) {
  const {
    text,
    disabled,
    icon,
    color = "primary",
    rounded = false,
    onClick,
    style,
    type,
    endIcon,
    background,
  } = props;
  return (
    <StyledButton
      disabled={disabled}
      color={color}
      rounded={rounded}
      onClick={onClick}
      style={style}
      type={type}
      endIcon={endIcon}
      background={background}
    >
      {icon && typeof icon != "boolean" ? (
        <>{icon} &nbsp;&nbsp;</>
      ) : (
        icon && (
          <>
            <Add /> &nbsp;&nbsp;
          </>
        )
      )}
      {text}
    </StyledButton>
  );
}
