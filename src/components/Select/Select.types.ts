import { SelectHTMLAttributes, ReactNode } from 'react';

export type SelectSize = 'sm' | 'md' | 'lg';
export type SelectVariant = 'outline' | 'filled' | 'flushed';

export interface SelectOption {
  value: string | number;
  label: string;
  isDisabled?: boolean;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: SelectSize;
  variant?: SelectVariant;
  options: SelectOption[];
  placeholder?: string;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
} 