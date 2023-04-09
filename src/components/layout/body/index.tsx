import cx from 'classnames';
import React, { ReactNode, RefObject } from 'react';

import styles from './body.module.scss';

interface Props {
  arrangement: 'left' | 'center' | 'right' | 'basic' | never;
  ref?: RefObject<HTMLDivElement>;
  children?: ReactNode;
}

const Body = ({ arrangement, ref, children }: Props) => {
  return (
    <div className={cx(styles.container, styles[arrangement])} ref={ref}>
      {children}
    </div>
  );
};

export default Body;
