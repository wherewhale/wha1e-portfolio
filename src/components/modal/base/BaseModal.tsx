import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import styles from './baseModal.module.scss';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const BaseModal = ({ isOpen, onClose, children }: Props) => {
  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames={{
        enter: styles.modalEnter,
        enterDone: styles.modalEnterDone,
      }}
      unmountOnExit //얘를 켜두면 isOpen이 꺼지고 나서, CSSTransition의 Element는 DOM Tree에서 사라진다 (개꿀)
    >
      <>
        {ReactDOM.createPortal(
          <aside className={styles.container}>
            <div className={styles.overlay} onClick={onClose} />
            <div className={styles.modalWrapper}>{children}</div>
          </aside>,
          // eslint-disable-next-line comma-dangle
          document.getElementById('modal-root') as HTMLDivElement,
        )}
      </>
    </CSSTransition>
  );
};

export default BaseModal;
