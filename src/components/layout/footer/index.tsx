import React from 'react';

import styles from './footer.module.scss';

interface Props {
  userName: string;
  userJob: string;
}

//TODO: 카카오, 페이스북, 인스타 링크 업데이트 필요

const Footer = ({ userName, userJob }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <div>{userName}</div>
        <div>{userJob}</div>
      </div>
      <div className={styles.copyright}>© 2023. Developer.손영호 All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
