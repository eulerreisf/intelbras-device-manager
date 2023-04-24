export type ButtonProps = {
  text: string;
  disabled?: boolean;
  icon?: boolean | JSX.Element;
  color?: "primary" | "secondary" | "info" | "error";
  rounded?: boolean;
  onClick?: ( e: any ) => void;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
  endIcon?: any;
  background?: string | undefined;
};