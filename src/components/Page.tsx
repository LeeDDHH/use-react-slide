'use strict';

import React from 'react';
import styles from '../styles/page.module.css';

type Props = {
  backgroundColor?: string;
  useSection?: boolean;
  children?: React.ReactNode;
};

const Page = ({
  backgroundColor = 'gray',
  useSection = false,
  children,
}: Props) => {
  const style = {
    backgroundColor: backgroundColor,
  };
  const className = useSection ? styles.sectionPage : styles.page;
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default Page;
