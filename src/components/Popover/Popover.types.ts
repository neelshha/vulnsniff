import { HTMLAttributes, ReactNode } from 'react';

export type PopoverPlacement = 
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

export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  trigger: ReactNode;
  placement?: PopoverPlacement;
  isLazy?: boolean;
  closeOnBlur?: boolean;
  closeOnEsc?: boolean;
  initialFocusRef?: React.RefObject<HTMLElement>;
  finalFocusRef?: React.RefObject<HTMLElement>;
}

export interface PopoverTriggerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface PopoverContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface PopoverHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface PopoverBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface PopoverFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface PopoverArrowProps extends HTMLAttributes<HTMLDivElement> {} 