import { HTMLAttributes, ReactNode } from 'react';

export type TabVariant = 'line' | 'enclosed' | 'soft-rounded' | 'solid-rounded';
export type TabOrientation = 'horizontal' | 'vertical';
export type TabSize = 'sm' | 'md' | 'lg';

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
  isDisabled?: boolean;
}

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  items: TabItem[];
  defaultIndex?: number;
  variant?: TabVariant;
  orientation?: TabOrientation;
  size?: TabSize;
  isFitted?: boolean;
  onTabChange?: (index: number) => void;
}

export interface TabListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface TabProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isSelected?: boolean;
  isDisabled?: boolean;
}

export interface TabPanelsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
} 