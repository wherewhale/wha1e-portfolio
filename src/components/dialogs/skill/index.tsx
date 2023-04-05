import Image from 'next/image';
import React from 'react';

import styles from './skill.module.scss';

interface Props {
  title: string;
  srcs: any[];
  alts: string[];
  skills: string[];
}

const SkillDialog = ({ title, srcs, alts, skills }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div style={{ display: 'flex', marginTop: '12px' }}>
        <div className={styles.iconContainer}>
          {srcs.map((icon, index) => (
            <Image src={srcs[index]} key={`iconSrc_${srcs[index]}`} width={70} height={70} alt={alts[index]} />
          ))}
        </div>
        <div className={styles.textContainer}>
          {skills.map((skill, index) => (
            <div key={`${skills[index]}_text_key`}>{skills[index]}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillDialog;
