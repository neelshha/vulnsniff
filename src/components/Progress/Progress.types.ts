import { HTMLAttributes } from 'react';

export type ProgressVariant = 'line' | 'circle';
export type ProgressColor = 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type ProgressSize = 'sm' | 'md' | 'lg';

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  variant?: ProgressVariant;
  color?: ProgressColor;
  size?: ProgressSize;
  hasStripe?: boolean;
  isAnimated?: boolean;
  showValue?: boolean;
  valueFormat?: (value: number) => string;
} 