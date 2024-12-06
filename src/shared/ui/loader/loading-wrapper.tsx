import { ReactNode } from 'react';

import { Loader } from '@/shared/ui';

import styles from './loader.module.css';

type LoadingWrapperProps = {
  isLoading: boolean;
  isError?: boolean;
  WrappedComponent: ReactNode;
};

export const LoadingWrapper = ({
  isLoading,
  isError,
  WrappedComponent,
}: LoadingWrapperProps) => {
  if (isError) {
    return (
      <div className={styles.loaderContainer}>
        Произошла непредвиденная ошибка! Попробуйте позже
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={styles.loaderContainer}>
        <Loader />
      </div>
    );
  }

  return WrappedComponent;
};
