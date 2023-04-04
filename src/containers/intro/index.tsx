import React from 'react';

import styles from './intro.module.scss';
import Image from 'next/image';
import profile from 'src/assets/images/home/profile.jpg';
import background from 'src/assets/images/home/background.jpg';
import { IoMdSchool } from 'react-icons/io';
import { BsFillBuildingFill } from 'react-icons/bs';

interface Props {
  title?: string;
  subTitle?: string;
  name?: string;
  background?: string; //뒷 배경 동영상이거나 사진이거나 색상
}

const Intro = ({ title, subTitle, name, background }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.introduce}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>{subTitle}</div>
        <div className={styles.profile}>
          <Image src={profile} width={300} height={300} alt="profile" />
        </div>
      </div>
      <div className={styles.career}>
        <div className={styles.inline}>
          <IoMdSchool />
          <div>
            <p style={{ fontWeight: 400 }}>Konkuk Univ.</p>
            Industrial Engineerging & Smart ICT Convergence
          </div>
        </div>
        <div className={styles.inline}>
          <BsFillBuildingFill />
          <div>
            <p style={{ fontWeight: 400 }}>Huemonelab</p>
            FE/Programming Tutor (2020.06 ~ 2021.01)
          </div>
        </div>
        <div className={styles.inline}>
          <BsFillBuildingFill />
          <div>
            <p style={{ fontWeight: 400 }}>HanBee</p>
            Co-Founder/Developer (2022.08 ~ )
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
