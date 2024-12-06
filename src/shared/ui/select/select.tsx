import { SelectHTMLAttributes } from 'react';

import { cn } from '@/shared/lib/cn/cn.ts';

import styles from './select.module.css';

export type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: SelectOption[];
};

export const Select = ({ options, ...props }: SelectProps) => {
  return (
    <select {...props} className={cn(styles.select, props.className)}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
