import { ComponentPropsWithoutRef, ElementType } from 'react';

import { cn } from '@/shared/lib/cn/cn.ts';

import styles from './button.module.css';

type ButtonProps<C extends ElementType> = {
  component?: C;
} & ComponentPropsWithoutRef<C>;

export const Button = <C extends ElementType = 'button'>({
  component,
  children,
  ...props
}: ButtonProps<C>) => {
  const Component = component || 'button';
  return (
    <Component {...props} className={cn(styles.button, props.className)}>
      {children}
    </Component>
  );
};
