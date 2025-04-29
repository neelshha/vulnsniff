import { InputHTMLAttributes, ReactNode } from 'react';

export type CheckboxSize = 'sm' | 'md' | 'lg';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: CheckboxSize;
  label?: ReactNode;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isIndeterminate?: boolean;
} 