import cx from 'classnames';
import React, { useCallback, useState } from 'react';
import { HiX } from 'react-icons/hi';
import { RxHamburgerMenu } from 'react-icons/rx';

import { Drawer } from '@/components/drawer';

import styles from './header.module.scss';

interface Props {
  menuList: string[]; //메뉴 이름 및 순서
  onView: string; //페이지 id
  style: 'first' | 'second' | 'third' | never;
  onClick: (page: string) => void; //버튼 눌렀을 때 이동해야 됨
}

//TODO: 버튼 매핑

const Header = ({ menuList, style, onView, onClick }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onClickDrawerButton = useCallback((page: string) => {
    onClick(page);
    setIsOpen(false);
  }, []);

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
      <div role="button" className={cx(styles.icon, { [styles.hide]: isOpen === true })} onClick={onOpen}>
        <RxHamburgerMenu />
      </div>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <div className={styles.drawer}>
          <div className={styles.drawerTop}>
            <HiX onClick={onClose} />
          </div>
          {menuList.map((list, index) => (
            <div
              key={`mobile_button_${index}`}
              role="button"
              className={cx(styles.drawerButton, { [styles.active]: onView === menuList[index] })}
              onClick={() => onClickDrawerButton(menuList[index])}
            >
              {menuList[index]}
            </div>
          ))}
        </div>
      </Drawer>
    </menu>
  );
};

export default Header;
