'use strict';

import React from 'react';
import style from '../styles/scrollIcon.module.css';
import pageBottomStyle from '../styles/pageBottom.module.css';

const ScrollIcon = () => {
  return (
    <div className={pageBottomStyle.pageBottom}>
      <button className={style.scroll} title="下へスクロール">
        <span />
      </button>
    </div>
  );
};

export default ScrollIcon;
