import { InputHTMLAttributes, ReactNode } from 'react';

export type RadioSize = 'sm' | 'md' | 'lg';
export type RadioColor = 'primary' | 'success' | 'warning' | 'danger' | 'info';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: RadioSize;
  color?: RadioColor;
  label?: ReactNode;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
}

export interface RadioGroupProps {
  children: ReactNode;
  value?: string;
  defaultValue?: string;
  name?: string;
  isDisabled?: boolean;
  onChange?: (value: string) => void;
} 