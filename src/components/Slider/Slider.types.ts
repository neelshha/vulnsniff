import { HTMLAttributes } from 'react';

export type SliderSize = 'sm' | 'md' | 'lg';
export type SliderColor = 'primary' | 'success' | 'warning' | 'danger' | 'info';

export interface SliderProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  size?: SliderSize;
  color?: SliderColor;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  showValue?: boolean;
  valueFormat?: (value: number) => string;
  onValueChange?: (value: number) => void;
  onChangeEnd?: (value: number) => void;
} 