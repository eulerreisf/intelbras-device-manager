/* eslint-disable no-unused-vars */
export type IInput = {
  label: string;
  size?: 'small' | 'medium' | undefined;
  focused?: boolean;
  fullWidth?: boolean | undefined;
  value?: string;
  space?: string;
  type?: string;
  required?: boolean;
  onChange?: ( event: React.ChangeEvent<HTMLInputElement> ) => void;
  error?: boolean;
  autoComplete?: string;
  name?: string;
  disabled?: boolean;
  validate?: 'number' | 'string';
  defaultValue?: string | number;
  onKeyDown?: ( event: React.KeyboardEvent<HTMLInputElement> ) => void;
  title?: string;
};
