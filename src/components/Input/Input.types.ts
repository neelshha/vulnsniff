import { InputHTMLAttributes, ReactNode } from 'react';

export type InputVariant = 'outline' | 'filled' | 'flushed';
export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
  inputSize?: InputSize;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
} 