import Link from 'next/link';
import React from 'react';
import { BsFillTelephoneOutboundFill, BsGithub, BsInstagram } from 'react-icons/bs';
import { ImSoundcloud } from 'react-icons/im';
import { RxNotionLogo } from 'react-icons/rx';

import styles from './contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Contact</div>
      <div className={styles.buttonContainer}>
        <a href="tel:010-5474-0525" className={styles.wrapper}>
          <BsFillTelephoneOutboundFill /> Phone : 010-5474-0525
        </a>
        <Link href="https://github.com/wherewhale" className={styles.wrapper} target="_blank" rel="noopener noreferrer">
          <BsGithub /> Github : wherewhale
        </Link>
        <Link href="https://www.instagram.com/whale_son_98/" className={styles.wrapper} target="_blank" rel="noopener noreferrer">
          <BsInstagram /> Instagram : @whale_son_98
        </Link>
        <Link href="https://soundcloud.com/youngho-sohn-309556191" className={styles.wrapper} target="_blank" rel="noopener noreferrer">
          <ImSoundcloud /> SoundCloud : WHALESON
        </Link>
        <Link href="https://wha1estory.notion.site/eac4ffd7fedf4d26ab2375dd84f44d5d?v=7d46a9826dfa4b148634383bbab7008d&pvs=4" className={styles.wrapper} target="_blank" rel="noopener noreferrer">
          <RxNotionLogo /> Notion Blog : Wha1e Wiki
        </Link>
      </div>
    </div>
  );
};

export default Contact;
