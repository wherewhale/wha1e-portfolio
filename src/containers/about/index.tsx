import React from 'react';

import styles from './about.module.scss';

interface Props {
  test: string;
}

const About = ({ test }: Props) => {
  return <div className={styles.container}>{test}</div>;
};

export default About;
