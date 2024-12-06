import { InputHTMLAttributes } from 'react';

import { cn } from '@/shared/lib/cn/cn.ts';

import styles from './input.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ ...props }: InputProps) => {
  return <input {...props} className={cn(styles.input, props.className)} />;
};
