'use strict';

import React from 'react';
import styles from '../styles/section.module.css';

type Props = {
  backgroundColor?: string;
  children?: React.ReactNode;
};

const Section = ({ children, backgroundColor = 'gray' }: Props) => {
  const style = {
    backgroundColor: backgroundColor,
  };
  return (
    <section className={styles.section} style={style}>
      {children}
    </section>
  );
};

export default Section;
