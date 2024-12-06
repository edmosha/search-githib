import { ButtonHTMLAttributes } from 'react';

import { cn } from '@/shared/lib/cn/cn.ts';

import styles from './icon-button.module.css';

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton = ({ children, ...props }: IconButtonProps) => {
  return (
    <button {...props} className={cn(styles.button, props.className)}>
      {children}
    </button>
  );
};
