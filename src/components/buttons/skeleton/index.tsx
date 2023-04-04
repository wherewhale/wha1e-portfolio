import cx from 'classnames';
import React from 'react';

import styles from './buttonSkeleton.module.scss';

interface Props {
  width?: number; //옵션4 (버튼의 길이)
  height?: number; //옵션3 (버튼의 높이)
  label: string; //옵션2 (버튼에 들어갈 텍스트)
  theme: 'light' | 'dark' | never; //옵션1 (테마)
  onClick?: () => void; //옵션5 (버튼의 기능)
}

const ButtonSkeleton = ({ width, height, label, theme, onClick }: Props) => {
  const ButtonStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <button type="button" style={ButtonStyle} className={cx(styles.wrapper, styles[theme])} onClick={onClick}>
      {label}
    </button>
  );
};

export default ButtonSkeleton;
