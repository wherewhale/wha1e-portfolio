import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { RiKakaoTalkFill } from 'react-icons/ri';
import logo from 'src/assets/images/logo/logo.svg';

import styles from './footer.module.scss';

interface Props {
  userName: string;
  userJob: string;
}

//TODO: 카카오, 페이스북, 인스타 링크 업데이트 필요

const Footer = ({ userName, userJob }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Link href="https://qru-landing.vercel.app/">
          <div className={styles.logoWrapper}>
            <Image className={styles.logo} src={logo} width={120} height={120} alt="logo" />
          </div>
        </Link>

        <div className={styles.slogan}>포트폴리오, 새로운 가치를 더하다</div>
        <Link href="/kakao">
          <button className={styles.icon} type="button">
            <RiKakaoTalkFill size={18} />
          </button>
        </Link>
        <Link href="/facebook">
          <button className={styles.icon} type="button">
            <BsFacebook size={15} />
          </button>
        </Link>
        <Link href="/instagram">
          <button className={styles.icon} type="button">
            <AiFillInstagram size={18} />
          </button>
        </Link>
      </div>
      <div className={styles.center}>{userName}</div>
      <div className={styles.right}>{userJob}</div>
      <div className={styles.copyright}>© 2023, QRU. All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
