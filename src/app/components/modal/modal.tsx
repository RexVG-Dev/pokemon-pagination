import { MouseEvent } from 'react';

import styles from './modal.module.scss';
import { IconButton } from '../icon-button';

type ModalType = {
  imgUrl?: string;
  clickCloseButton: (e:MouseEvent) => void;
}

export function Modal({imgUrl, clickCloseButton}: ModalType) {
  return (
    <dialog open className={styles.modal}>
      <div className={styles['modal__container']}>
        <img src={imgUrl} alt="pokemon" className={styles['modal__img']}/>
        <div className={styles['modal__action']}>
          <IconButton
            onClick={clickCloseButton}
            size='medium'
            kind='primary'
          >
            X
          </IconButton>
        </div>
      </div>
    </dialog>
  )
}