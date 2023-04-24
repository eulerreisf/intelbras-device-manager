export type ISelect = {
  children: JSX.Element | JSX.Element[];
  label: string;
  focused?: boolean;
  fullWidth?: boolean | undefined;
  value?: string | number | string[];
  onChange?: any;
  defaultValue?: string | number | string[];
  disabled?: boolean;
  renderValue?: any;
  pmargin?: string;
  props?: Record<string, any> | Record<string, any>[];
};
