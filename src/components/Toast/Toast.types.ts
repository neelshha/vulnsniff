import { HTMLAttributes, ReactNode } from 'react';

export type ToastStatus = 'info' | 'success' | 'warning' | 'error';
export type ToastPosition = 
  | 'top'
  | 'top-right'
  | 'top-left'
  | 'bottom'
  | 'bottom-right'
  | 'bottom-left';

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  status?: ToastStatus;
  duration?: number;
  isClosable?: boolean;
  onClose?: () => void;
}

export interface ToastOptions {
  id?: string;
  title?: string;
  description?: string;
  status?: ToastStatus;
  duration?: number;
  position?: ToastPosition;
  isClosable?: boolean;
  onClose?: () => void;
}

export interface ToastManagerProps {
  children: ReactNode;
  position?: ToastPosition;
  maxToasts?: number;
} 