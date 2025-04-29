import { HTMLAttributes, ReactNode } from 'react';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarVariant = 'circular' | 'rounded' | 'square';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  size?: AvatarSize;
  variant?: AvatarVariant;
  src?: string;
  alt?: string;
  name?: string;
  children?: ReactNode;
  isOnline?: boolean;
  isOffline?: boolean;
  isBusy?: boolean;
} 