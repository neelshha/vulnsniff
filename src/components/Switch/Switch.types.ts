import { InputHTMLAttributes, ReactNode } from 'react';

export type SwitchSize = 'sm' | 'md' | 'lg';
export type SwitchColor = 'primary' | 'success' | 'warning' | 'danger' | 'info';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: SwitchSize;
  color?: SwitchColor;
  label?: ReactNode;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
} 