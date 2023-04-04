import React from 'react';

import styles from './drawer.module.scss';

interface Props {
  from: 'left' | 'top' | 'right'; //어디서 튀어나올건지
  nav?: any; //타입 설정 후, 제네릭으로 타입 확장성 추가 (오브젝트 타입)
}

const Drawer = () => {
  return <div className={styles.container} />;
};

export default Drawer;
