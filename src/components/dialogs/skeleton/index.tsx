import Link from 'next/link';
import React, { ReactNode } from 'react';

import styles from './skeletonDialog.module.scss';

interface Props {
  header: string;
  body: ReactNode;
  footer: ReactNode;
  href: string;
}

const SkeletonDialog = ({ header, body, footer, href }: Props) => {
  return (
    <Link href={href} className={styles.container} target="_blank" rel="noopener noreferrer">
      <div className={styles.header}>{header}</div>
      <hr />
      <div className={styles.body}>{body}</div>
      <hr />
      <div className={styles.footer}>{footer}</div>
    </Link>
  );
};

export default SkeletonDialog;
