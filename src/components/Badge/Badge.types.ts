import { HTMLAttributes, ReactNode } from 'react';

export type BadgeVariant = 'solid' | 'subtle' | 'outline';
export type BadgeColor = 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  color?: BadgeColor;
  size?: BadgeSize;
  children: ReactNode;
  isDot?: boolean;
  max?: number;
  value?: number;
} 