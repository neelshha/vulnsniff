import { HTMLAttributes, ReactNode } from 'react';

export type TooltipPlacement = 
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end';

export type TooltipVariant = 'light' | 'dark';

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  children: ReactNode;
  placement?: TooltipPlacement;
  variant?: TooltipVariant;
  isOpen?: boolean;
  hasArrow?: boolean;
  delay?: number;
  isDisabled?: boolean;
} 