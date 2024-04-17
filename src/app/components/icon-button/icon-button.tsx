import { clsx } from 'clsx';
import { ButtonHTMLAttributes } from 'react';

import styles from './icon-button.module.scss';

type IconButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  size: string;
  kind: string;
}

export function IconButton({
  size,
  kind,
  children,
  onClick
}: IconButtonType) {
  return (
    <button
      className={clsx(styles['icon-button'],
        size === 'large' && styles['icon-button__large'],
        size === 'medium' && styles['icon-button__medium'],
        size === 'small' && styles['icon-button__small'],
        kind === 'primary' && styles['icon-button__primary'],
        kind === 'secondary' && styles['icon-button__secondary'],
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}