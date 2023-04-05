import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import styles from './drawer.module.scss';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const Drawer = ({ isOpen, onClose, children }: Props) => {
  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames={{
        enter: styles.drawerEnter,
        exit: styles.drawerExit,
      }}
      unmountOnExit //얘를 켜두면 isOpen이 꺼지고 나서, CSSTransition의 Element는 DOM Tree에서 사라진다 (개꿀)
    >
      <>
        {ReactDOM.createPortal(
          <aside className={styles.container}>
            <div className={styles.overlay} onClick={onClose} />
            <div className={styles.drawerWrapper}>{children}</div>
          </aside>,
          // eslint-disable-next-line comma-dangle
          document.getElementById('drawer-root') as HTMLDivElement,
        )}
      </>
    </CSSTransition>
  );
};

export default Drawer;
