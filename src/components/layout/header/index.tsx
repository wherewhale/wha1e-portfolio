import cx from 'classnames';
import Image from 'next/image';
import React from 'react';
import logo from 'src/assets/images/logo/logo.svg';

import styles from './header.module.scss';

interface Props {
  menuList: string[]; //메뉴 이름 및 순서
  onView: string; //페이지 id
  style: 'first' | 'second' | 'third' | never;
  onClick: (page: string) => void; //버튼 눌렀을 때 이동해야 됨
}

//TODO: 버튼 매핑

const Header = ({ menuList, style, onView, onClick }: Props) => {
  return (
    <menu className={styles.container}>
      <div className={styles.logo}>Wha1e's Pacific</div>
      <nav className={styles.nav}>
        {menuList.map((list, index) => (
          <button
            key={`page_${index}`}
            type="button"
            className={cx(styles.button, styles[style], { [styles.active]: onView === menuList[index] })}
            onClick={() => onClick(menuList[index])}
          >
            {menuList[index]}
          </button>
        ))}
      </nav>
    </menu>
  );
};

export default Header;
