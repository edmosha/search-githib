import { ButtonHTMLAttributes } from 'react';

import { useNavigate } from 'react-router-dom';

import { ArrowIcon } from '@/shared/assets';
import { cn } from '@/shared/lib/cn/cn.ts';

import styles from './back-button.module.css';

type BackButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const BackButton = ({ ...props }: BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      {...props}
      onClick={() => navigate(-1)}
      className={cn(styles.backButton, props.className)}
    >
      <ArrowIcon />
      Back
    </button>
  );
};
