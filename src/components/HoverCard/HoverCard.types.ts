import { HTMLAttributes, ReactNode } from 'react';

export type HoverCardPlacement = 
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

export interface HoverCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  trigger: ReactNode;
  placement?: HoverCardPlacement;
  openDelay?: number;
  closeDelay?: number;
  isLazy?: boolean;
}

export interface HoverCardTriggerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface HoverCardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface HoverCardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface HoverCardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface HoverCardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface HoverCardArrowProps extends HTMLAttributes<HTMLDivElement> {} 