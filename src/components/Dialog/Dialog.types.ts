import { HTMLAttributes, ReactNode } from 'react';

export type DialogSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  size?: DialogSize;
  children: ReactNode;
  isCentered?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  initialFocusRef?: React.RefObject<HTMLElement>;
  finalFocusRef?: React.RefObject<HTMLElement>;
}

export interface DialogHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface DialogBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface DialogFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
} 