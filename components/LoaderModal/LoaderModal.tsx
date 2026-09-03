'use client';

import { useEffect } from 'react';
import css from './LoaderModal.module.css';

interface LoaderModalProps {
  isLoading: boolean;
}

export default function LoaderModal({ isLoading }: LoaderModalProps) {
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <div className={css.spinner}></div>
        <p className={css.title}>Loading tracks...</p>
        <p className={css.subtitle}>
          Please wait while we fetch the best travel trucks for you
        </p>
      </div>
    </div>
  );
}
