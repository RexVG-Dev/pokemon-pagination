import { clsx } from 'clsx';
import { ButtonHTMLAttributes } from 'react';

import styles from './button.module.scss';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  size: string;
  kind: string;
}

export function Button({
  size,
  kind,
  children,
  onClick
}: ButtonType) {
  return (
    <button
      className={clsx(styles['button'],
        size === 'large' && styles['button__large'],
        size === 'medium' && styles['button__medium'],
        size === 'small' && styles['button__small'],
        size === 'fluid' && styles['button__fluid'],
        kind === 'primary' && styles['button__primary'],
        kind === 'secondary' && styles['button__secondary'],
        kind === 'light' && styles['button__light'],
      )}
      onClick={onClick}
    >{children}</button>
  )
}