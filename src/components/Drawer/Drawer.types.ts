import { HTMLAttributes, ReactNode } from 'react';

export type DrawerPlacement = 'top' | 'right' | 'bottom' | 'left';
export type DrawerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  placement?: DrawerPlacement;
  size?: DrawerSize;
  isCentered?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  initialFocusRef?: React.RefObject<HTMLElement>;
  finalFocusRef?: React.RefObject<HTMLElement>;
}

export interface DrawerOverlayProps extends HTMLAttributes<HTMLDivElement> {}

export interface DrawerContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface DrawerHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface DrawerBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface DrawerFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface DrawerCloseButtonProps extends HTMLAttributes<HTMLButtonElement> {} 