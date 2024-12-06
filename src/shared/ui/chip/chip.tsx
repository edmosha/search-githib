import { ReactNode } from 'react';

import { cn } from '@/shared/lib/cn/cn.ts';

import styles from './chip.module.css';

type ChipProps = {
  children: ReactNode;
  className?: string;
};

export const Chip = ({ className, children }: ChipProps) => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};
